// IMPORTAR DEPENDENCIAS 
import supertest from "supertest";
import app from "../app.js";
import mongoose from "mongoose";
import { userModel } from "../src/models/users.model.js";

// DEFINIR BLOQUES DE PRUEBA
describe(
    'Pruebas de controladores de los usuarios',
    ()=>{

        /*
            beforeEach => acciones que se realicen antes de la prueba
            afterAll=> acciones que se hagan al final de todas las pruebas 
        */

        //Limpiar la base de datos antes de cada prueba 
        beforeEach(async ()=>{
            await userModel.deleteMany({});
        });

        // CERRAR ;a conexion a MongoDB despues de las pruebas
        afterAll(async ()=>{
            await mongoose.connection.close();
        });

        // PRUEBA DE USUARIO CREADO
        const testUser = {
            fullName: 'Joe Borrow',
            email: ' borrow@user.com',
            password: '123'
        }

        // PETICION POST
        describe(
            'Pruebas POST / users',
            /*
                susscefull case
                failed case
                notfound elements
            */
            ()=>{

            // CREACION DE USUARIOS
            it(
                'Prueba de creacion de usuarios CORRECTA',
                async()=>{
                    const res = await supertest(app).post('/usuarios').send(testUser)

                    // DEFINIR QUE SE ESPERA DE LA RESPUESTA
                    expect(res.statusCode).toBe(201);
                }
            );

            // ERROR si falta campo obligatorio
            it(
                'Devuelve un ERROR si FALTA campo de informacion obligatoria',
                async()=>{
                    const res = await supertest(app).post('/usuarios').send({email:testUser.email})

                    // DEFINIR QUE SE ESPERA DE LA RESPUESTA
                    expect(res.body).toHaveProperty('mensaje', 'Ocurrió un error al crear un usuario');
                        
                }
            );

            }
        );

        // PETICION GET
        describe(
            'Pruebas GET / users',

            /*
                susscefull case
                failed case
                notfound elements
            */

            ()=>{
                it(
                    'Deberia indicar que no hay usuarios almacenados',
                    async()=>{
                        const res = await supertest(app).get('/usuarios');
                        expect(res.statusCode).toBe(200);
                        expect(res.body).toHaveProperty('mensaje', 'No hay usuarios almacenados')
                    }
                )

                // DEBERIA INDICAR QUE NO HAY USUARIOS ALMACENADOS
                // await new userModel(testUser).save();
                
            }
        );
    }
);