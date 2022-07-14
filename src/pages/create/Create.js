import { useState,useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { projectFirestore } from '../../firebase/config'

// styles
import './Create.css'

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)
  const history = useHistory()


  const handleSubmit= async (e)=> {
    e.preventDefault()
    const doc = ({ title, ingredients, method, cookingTime: cookingTime})

    try{
      await projectFirestore.collection('recipes').add(doc)
      history.push('/')
    }catch(err){
      console.log(err)
    }

  }

  const handleAdd= (e)=>{
    e.preventDefault()
    const ing = newIngredient.trim()

    if(ing && !ingredients.includes(ing)){
      setIngredients(prevIngredients => [...prevIngredients, ing])
    } 
    setNewIngredient('')
    ingredientInput.current.focus()
  }

  return (
    <div className='create'>
      <h2 className='page-title'>Add a New Note</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Problem name:</span>
          <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
            />
        </label>

        <label>
          <span>Related topics:</span>
          <div className="ingredients">
            <input 
              type="text" 
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput} 
              />
            <button className="btn" onClick={handleAdd}>add</button>

          </div>
        </label>
        <p>Current topics: {ingredients.map(i => <em >{i}, </em>)}</p>

        <label>
          <span>Problem solution:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required 
          />
        </label>

        <label>
          <span>Diffculty:</span>
          <input 
            type="text" 
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required 
          />
        </label>

        <button className='btn'>submit</button>

      </form>
    </div>
  )
}
