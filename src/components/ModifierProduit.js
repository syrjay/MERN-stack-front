import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ModifierProduit = props => {
    const data = {
        nom:'',
        prix:0,
        description:''
    }
    const [produitData, setProduitData] = useState(data)

    const onHandleChange = e => {
        setProduitData({...produitData, [e.target.id]: e.target.value})
    }

    useEffect(() => {
        axios.get('http://localhost:5000/produit/'+props.match.params.id)
        .then(res => {
            setProduitData(res.data.data)
        }).catch(err => console.log(err))
    }, [props.match.params.id])

    const onHandleSubmit = e => {
        e.preventDefault()
        const produit = {
            nom,
            prix,
            description
        }

        axios.patch('http://localhost:5000/produit/update/'+props.match.params.id, produit)
        .then(res => {
            alert('modification réussi')
            props.history.push('/')
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
                    <label htmlFor="prix">Prix</label>
                    <input type="number" className="form-control" id="prix" onChange={onHandleChange} value={prix} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" onChange={onHandleChange} value={description} />
                </div>
                
                <button type="submit" className="btn btn-primary">Enregistrer</button>
            </form>
        </div>
    )
}

export default ModifierProduit
