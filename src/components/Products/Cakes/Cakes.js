import React from 'react';

import classes from './Cakes.css';
import Carousel from '../../UI/Carousel/Carousel';
import Modal from '../../UI/Modal/Modal';
import CakeDetails from './CakeDetails/CakeDetails';

const cardapio = [
    {
        title: "Abacaxi",
        base: "Pao de Lo Branco",
        firstFilling: "Creme Tres Leite com Abacaxi",
        secondFilling: "Beijinho",
        cakeTop: "Chantily",
        cakeSlice: "images/cakeSlice1.jpg"
    },
    {
        title: "Ameixa",
        base: "Pao de Lo Branco",
        firstFilling: "Creme Tres Leite com Ameixa",
        secondFilling: "Beijinho",
        cakeTop: "Chantily",
        cakeSlice: "images/cakeSlice2.jpg"
    },
    {
        title: "Pessego",
        base: "Pao de Lo Branco",
        firstFilling: "Creme Tres Leite com Pessego",
        secondFilling: "Beijinho",
        cakeTop: "Chantily",
        cakeSlice: "images/cakeSlice3.jpg"
    },
    {
        title: "Abacaxi",
        base: "Pao de Lo Branco",
        firstFilling: "Creme Tres Leite com Abacaxi",
        secondFilling: "Beijinho",
        cakeTop: "Chantily",
        cakeSlice: "images/cakeSlice1.jpg"
    },
    {
        title: "Ameixa",
        base: "Pao de Lo Branco",
        firstFilling: "Creme Tres Leite com Ameixa",
        secondFilling: "Beijinho",
        cakeTop: "Chantily",
        cakeSlice: "images/cakeSlice2.jpg"
    },
    {
        title: "Pessego",
        base: "Pao de Lo Branco",
        firstFilling: "Creme Tres Leite com Pessego",
        secondFilling: "Beijinho",
        cakeTop: "Chantily",
        cakeSlice: "images/cakeSlice3.jpg"
    },
    {
        title: "Abacaxi",
        base: "Pao de Lo Branco",
        firstFilling: "Creme Tres Leite com Abacaxi",
        secondFilling: "Beijinho",
        cakeTop: "Chantily",
        cakeSlice: "images/cakeSlice1.jpg"
    },
    {
        title: "Ameixa",
        base: "Pao de Lo Branco",
        firstFilling: "Creme Tres Leite com Ameixa",
        secondFilling: "Beijinho",
        cakeTop: "Chantily",
        cakeSlice: "images/cakeSlice2.jpg"
    },
    {
        title: "Pessego",
        base: "Pao de Lo Branco",
        firstFilling: "Creme Tres Leite com Pessego",
        secondFilling: "Beijinho",
        cakeTop: "Chantily",
        cakeSlice: "images/cakeSlice3.jpg"
    },
    {
        title: "Abacaxi",
        base: "Pao de Lo Branco",
        firstFilling: "Creme Tres Leite com Abacaxi",
        secondFilling: "Beijinho",
        cakeTop: "Chantily",
        cakeSlice: "images/cakeSlice1.jpg"
    },
    {
        title: "Ameixa",
        base: "Pao de Lo Branco",
        firstFilling: "Creme Tres Leite com Ameixa",
        secondFilling: "Beijinho",
        cakeTop: "Chantily",
        cakeSlice: "images/cakeSlice2.jpg"
    },
    {
        title: "Pessego",
        base: "Pao de Lo Branco",
        firstFilling: "Creme Tres Leite com Pessego",
        secondFilling: "Beijinho",
        cakeTop: "Chantily",
        cakeSlice: "images/cakeSlice3.jpg"
    },
    {
        title: "Abacaxi",
        base: "Pao de Lo Branco",
        firstFilling: "Creme Tres Leite com Abacaxi",
        secondFilling: "Beijinho",
        cakeTop: "Chantily",
        cakeSlice: "images/cakeSlice1.jpg"
    },
    {
        title: "Ameixa",
        base: "Pao de Lo Branco",
        firstFilling: "Creme Tres Leite com Ameixa",
        secondFilling: "Beijinho",
        cakeTop: "Chantily",
        cakeSlice: "images/cakeSlice2.jpg"
    },
    {
        title: "Pessego",
        base: "Pao de Lo Branco",
        firstFilling: "Creme Tres Leite com Pessego",
        secondFilling: "Beijinho",
        cakeTop: "Chantily",
        cakeSlice: "images/cakeSlice3.jpg"
    },
    {
        title: "Abacaxi",
        base: "Pao de Lo Branco",
        firstFilling: "Creme Tres Leite com Abacaxi",
        secondFilling: "Beijinho",
        cakeTop: "Chantily",
        cakeSlice: "images/cakeSlice1.jpg"
    },
    {
        title: "Ameixa",
        base: "Pao de Lo Branco",
        firstFilling: "Creme Tres Leite com Ameixa",
        secondFilling: "Beijinho",
        cakeTop: "Chantily",
        cakeSlice: "images/cakeSlice2.jpg"
    },
    {
        title: "Pessego",
        base: "Pao de Lo Branco",
        firstFilling: "Creme Tres Leite com Pessego",
        secondFilling: "Beijinho",
        cakeTop: "Chantily",
        cakeSlice: "images/cakeSlice3.jpg"
    },
    
]

class Cakes extends React.Component {

    state = {
        modalCake: {},
        isModalVisible: false,
    }

    showModalCake = (cake) => {
        this.setState({ ...this.state, isModalVisible: true, modalCake: cake });
    }

    render() {
        return (
            <>
                <Modal show={this.state.isModalVisible} modalClosed={() => this.setState({ isModalVisible: false })}>
                    <CakeDetails cake={this.state.modalCake} modalClosed={() => this.setState({ isModalVisible: false })}/>
                </Modal>
                <div className={classes.Cakes}>
                    <div>
                        <h1>Cakes</h1>
                    </div>
                    <div className={classes.Content}>
                        <div className={classes.MenuItems}>
                            <h2>Cardapio</h2>
                            <ul>
                                {cardapio.map((item, index) => (
                                    <li key={index} onClick={() => this.showModalCake(item)}><p>{item.title}</p></li>
                                ))}
                            </ul>
                        </div>
                        <Carousel />
                    </div>
                </div>
            </>
        );
    };
};

export default Cakes;