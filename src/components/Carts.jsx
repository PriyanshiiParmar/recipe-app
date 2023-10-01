const Carts =({name,thumbnail,ingredients,quantity,recipe})=>{
    return(
<div className="items">
    <img className="thumbnail" alt="" src={thumbnail}></img>
    <p className="name">{name}</p>
    <p className="ingredient">{ingredients}</p>
    <p className="quantity">{quantity}</p>
    <button className="recipe">{recipe}</button>
</div>
    )
}
export default Carts;