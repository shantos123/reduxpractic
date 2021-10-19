import React from 'react'

const Home = () => {
    return (
        <div>
           <div className="add-to-card">
            <img src="https://media.istockphoto.com/photos/shopping-cart-vector-art-closeup-view-picture-id1251362621?b=1&k=20&m=1251362621&s=170667a&w=0&h=dRxDVhO60mUXTb3g5N5EFizNRm8Sq7xDKdmyeBeZTXQ=" />
           </div>
            <h1>this is a redux practice class</h1>
            <div className="Cart-Wrapper card mx-5">
                <div className="img-Wrapper item">
                    <img src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60" />
                </div>
                <div className="text-Wrapper item my-5">
                    <span>
                    I-Phone
                    </span><br />
                    <span>
                        Price:$15000.00
                    </span>
                </div>
                <div className="btn-Wrapper item">
                    <button className="btn">Add to card</button>
                </div>
            </div>
        </div>
    )
}

export default Home
