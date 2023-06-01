import "./Checkout.scss"
import React, { useContext, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CartContext } from "../../context/CartContext";
import { collection, getDoc, addDoc, writeBatch, doc } from "firebase/firestore";
import { database } from "../../firebase/config";

export const CheckoutFormulario = () => {
    const { cart, totalCompra, emptyCart } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null)
    const [formValues, setFormValues] = useState(null);

    const initialValues = {
        nombre: "",
        apellido: "",
        ciudad: "",
        direccion: "",
        email: "",
    };

    const validationSchema = Yup.object({
        nombre: Yup.string().required("Este campo es requerido"),
        apellido: Yup.string().required("Este campo es requerido"),
        ciudad: Yup.string().required("Este campo es requerido"),
        direccion: Yup.string().required("Este campo es requerido"),
        email: Yup.string().email("Email inválido").required("Este campo es requerido"),
    });

    const handleSubmit = async (values) => {
        const orderData = {
            nombre: values.nombre,
            apellido: values.apellido,
            ciudad: values.ciudad,
            direccion: values.direccion,
            email: values.email,
            items: cart.map(item => ({ id: item.id, nombre: item.nombre, cantidad: item.cantidad })),
        };

        const batch = writeBatch(database);
        const productosRef = collection(database, "productos");
        const ordersRef = collection(database, "ordenes");

        const promesas = cart.map((item) => {
            const ref = doc(productosRef, item.id);
            return getDoc(ref);
        });

        const productos = await Promise.all(promesas);
        const outOfStock = [];

        productos.forEach((doc) => {
            const item = cart.find((i) => i.id === doc.id);
            const stock = doc.data().cantidad;

            if (stock >= item.cantidad) {
                batch.update(doc.ref, {
                    cantidad: stock - item.cantidad,
                });
            } else {
                outOfStock.push(item);
            }
        });

        if (outOfStock.length === 0) {
            addDoc(ordersRef, orderData)
                .then((doc) => {
                    batch.commit();
                    setOrderId(doc.id)
                    setFormValues(values)
                    emptyCart();
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            console.log(outOfStock);
            alert("Hay items sin stock");
        }
    };




    if (orderId) {
        return (
            <div className="container my-5 checkoutContainer">
                <h2>¡Muchas gracias por tu compra!</h2>
                <h3>Detalles de la compra</h3>
                <p>Nombre: {formValues.nombre} {formValues.apellido}</p>
                <p>Dirección: {formValues.direccion} - Ciudad: {formValues.ciudad}</p>
                <p>Email: {formValues.email}</p>
                <p>Importe total: {totalCompra} - Número de seguimiento: {orderId}</p>
                <Link to="/">Volver a inicio</Link>
            </div>
        );
    }

    if (cart.length === 0) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {/* <Form>
                    <div>
                        <label>Nombre:</label>
                        <Field type="text" id="nombre" name="nombre" />
                        <ErrorMessage name="nombre" component="div" />
                    </div>
                    <div>
                        <label>Apellido:</label>
                        <Field type="text" id="apellido" name="apellido" />
                        <ErrorMessage name="apellido" component="div" />
                    </div>
                    <div>
                        <label>Ciudad:</label>
                        <Field type="text" id="ciudad" name="ciudad" />
                        <ErrorMessage name="ciudad" component="div" />
                    </div>
                    <div>
                        <label>Dirección:</label>
                        <Field type="text" id="direccion" name="direccion" />
                        <ErrorMessage name="direccion" component="div" />
                    </div>
                    <div>
                        <label>Email:</label>
                        <Field type="email" id="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <button type="submit">Realizar Pedido</button>
                </Form> */}

                <Form className="my-4">
                    <div className="mb-3 row justify-content-center">
                        <label htmlFor="nombre" className="col-sm-2 col-form-label">Nombre:</label>
                        <div className="col-sm-6">
                            <Field type="text" id="nombre" name="nombre" className="form-control" />
                            <ErrorMessage name="nombre" component="div" className="text-danger" />
                        </div>
                    </div>
                    <div className="mb-3 row justify-content-center">
                        <label htmlFor="apellido" className="col-sm-2 col-form-label">Apellido:</label>
                        <div className="col-sm-6">
                            <Field type="text" id="apellido" name="apellido" className="form-control" />
                            <ErrorMessage name="apellido" component="div" className="text-danger" />
                        </div>
                    </div>
                    <div className="mb-3 row justify-content-center">
                        <label htmlFor="ciudad" className="col-sm-2 col-form-label">Ciudad:</label>
                        <div className="col-sm-6">
                            <Field type="text" id="ciudad" name="ciudad" className="form-control" />
                            <ErrorMessage name="ciudad" component="div" className="text-danger" />
                        </div>
                    </div>
                    <div className="mb-3 row justify-content-center">
                        <label htmlFor="direccion" className="col-sm-2 col-form-label">Dirección:</label>
                        <div className="col-sm-6">
                            <Field type="text" id="direccion" name="direccion" className="form-control" />
                            <ErrorMessage name="direccion" component="div" className="text-danger" />
                        </div>
                    </div>
                    <div className="mb-3 row justify-content-center">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
                        <div className="col-sm-6">
                            <Field type="email" id="email" name="email" className="form-control" />
                            <ErrorMessage name="email" component="div" className="text-danger" />
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">Realizar Pedido</button>
                    </div>
                </Form>



            </Formik>
        </div>
    );
};
