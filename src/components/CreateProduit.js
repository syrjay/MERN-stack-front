import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const CreateProduit = () => {
    const data = {
        nom:'',
        prix:0,
        description:''
    }

    const [produitData, setProduitData] = useState(data)

    const onHandleChange = e => {
        setProduitData({...produitData, [e.target.id]: e.target.value})
    }
    const onHandleSubmit = e => {
        e.preventDefault()
        const produit = {
            nom,
            prix,
            description
        }

        axios.post('http://localhost:5000/produit/create', produit)
        .then(res => {
            alert('creation reussi')
        }).catch(err => console.log(err))
    }

    const {nom, prix, description} = produitData

    return (
        <div className="container">
            <form className="container" onSubmit={onHandleSubmit}>
                <div className="form-group">
                    <label htmlFor="nom">Nom produit</label>
                    <input type="text" className="form-control" id="nom" onChange={onHandleChange} aria-describedby="emailHelp" value={nom} />
                </div>
                <div className="form-group">
                    <label for="prix">Prix</label>
                    <input type="number" className="form-control" id="prix" onChange={onHandleChange} value={prix} />
                </div>
                <div className="form-group">
                    <label for="description">Description</label>
                    <input type="text" className="form-control" id="description" onChange={onHandleChange} value={description} />
                </div>
                
                <button type="submit" className="btn btn-primary">Enregistrer</button>
                <Link to={"/"} className="btn btn-dark">Voir liste produit</Link>
            </form>
        </div>
    )
}

export default CreateProduit
