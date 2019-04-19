import React from 'react';
import ProductCircle from './ProductCircle/ProductCircle';

import classes from './OtherProducts.css';
import Modal from '../../UI/Modal/Modal';
import Details from './Details/Details';

const data = {
    cupCake: {
        title: "CupCakes",
        breefDescription: ["Bolos montados em pequenos potes de plastico;", "Praticidade para levar para viagem;"],
        description: ["Bolos montados em pequenos potes de plastico;", "Praticidade para levar para viagem;", "Fazemos para grandes quantidades para festas;"],
        img: "images/cupCake.jpg",
    },
    meringue: {
        title: "Meringue",
        breefDescription: ["Merengues montados para viagem;", "Traga o recipiente e montamos;"],
        description: ["Merengues montados para viagem;", "Traga o recipiente e montamos;", "Mais informacoes"],
        img: "images/meringue.jpg",
    },
    candies: {
        title: "Candies",
        breefDescription: ["Docinhos by Gi Brigadeiro;", "Brigadeiro - Casadinho;", "Beijinho - Pao de mel;"],
        description: ["Docinhos by Gi Brigadeiro;", "Brigadeiro - Casadinho;", "Beijinho - Pao de mel;", "docinhoTipo1 - DocinhoTipo2;"],
        img: "images/candies.jpg",
    }
}

class OtherProducts extends React.Component {
    state = {
        isModalVisible: false,
        productModalData: {},
    }
    
    render() {
        return (
            <>
                <Modal show={this.state.isModalVisible} modalClosed={() => this.setState({ isModalVisible: false })}>
                    <Details modalClosed={() => this.setState({ isModalVisible: false })} data={this.state.productModalData} />
                </Modal>
                <div className={classes.OtherProducts}>
                    <ProductCircle url={data.cupCake.img} data={data.cupCake} onClick={() => this.setState({ isModalVisible: true, productModalData: data.cupCake })} />
                    <ProductCircle url={data.meringue.img} data={data.meringue} onClick={() => this.setState({ isModalVisible: true, productModalData: data.meringue })} />
                    <ProductCircle url={data.candies.img} data={data.candies} onClick={() => this.setState({ isModalVisible: true, productModalData: data.candies })} />
                </div>
            </>
        );
    };
};

export default OtherProducts;