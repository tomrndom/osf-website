import React from 'react'

const PeopleSection = class extends React.Component {

  render() {

    const { people: { title, review } } = this.props;    

    return (
      <section className="home-s7-main">
        <h2 className="fix-h3-white">{title}</h2>
        <div className="home-s7-main-container container is-fluid">
          <div className="home-s7-main-container-child ">
            {review.map((tweet, index) => {
              return (
                <div className="card column" key={index}>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-48x48">
                          <img src={tweet.picture} alt="" />
                        </figure>
                      </div> 
                      <div className="media-content">
                        <p className="title is-4">{tweet.name}</p> 
                        <p className="subtitle is-6">{tweet.user}</p>
                      </div>
                    </div> 
                    <div className="content">
                      <p>
                        {tweet.text}
                      </p>
                    </div>
                  </div>
                </div> 
              )
            })}                                
          </div>
        </div>                
      </section> 
    )
  }
}

export default PeopleSection