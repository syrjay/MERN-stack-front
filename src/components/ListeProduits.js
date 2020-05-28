import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ListeProduits = props => {

    const [produits, setProduits] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/produit')
        .then(res => {
            setProduits(res.data.data.produits)
        }).catch(err => console.log(err))
    }, [produits])

    const supprimerProduit = id => {
        axios.delete('http://localhost:5000/produit/delete/'+id)
        .then(res => {
            alert('suppression réussi')
            props.history.push('/')
        })
    }

    return (
        <div>
            {
                produits.map((produit,index) => (
                <Fragment key={index}>
                <p>Nom : {produit.nom}</p>
                <p>Prix : {produit.prix}</p>
                <p>Description : {produit.description}</p>
                <p>
                    <Link to={"/create"} className="btn btn-primary btn-small m-2" >Crée produit</Link>
                    <Link to={"/update/"+produit._id} className="btn btn-warning btn-small m-2" >Modifier</Link>
                    <button className="btn btn-danger" onClick={() => supprimerProduit(produit._id)}>Supprimer</button>
                </p>
                </Fragment>
                ))
            }
        </div>
    )
}

export default ListeProduits
