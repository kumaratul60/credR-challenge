import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="welcomeData">
          <div className="information">
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Possimus, corrupti sunt. Minus, impedit
            </h3>
          </div>
          <div className="list">
            <button className="listBtn">WHAT WE OFFER</button>
            <ul>
              <li>Lorem ipsum dolor.</li>
              <li>Lorem ipsum dolor.</li>
              <li>Lorem ipsum dolor.</li>
              <li>Lorem ipsum dolor.</li>
              <li>Lorem ipsum dolor.</li>
              <li>Lorem ipsum dolor.</li>
            </ul>
          </div>
        </div>
        <div className="formBox">
          <div className="form">
            <form action="#">
              <h4 className="heading">Personel Details</h4>
              <div className="inputBox">
                <label className="label">Name</label>
                <input type="text" name="name" placeholder="Saniyo Joseph" />
              </div>
              <div className="inputBox">
                <label className="label">Mobile Number</label>
                <input
                  type="text"
                  name="MobileNumber"
                  placeholder={8211352326}
                />
              </div>
              <div className="inputBox">
                <select className="select">
                  <option disabled selected hidden>
                    Select City
                  </option>
                  <option>Lucknow</option>
                  <option>Bangalore</option>
                  <option>Hyderabad</option>
                  <option>Mumbai</option>
                </select>
              </div>
              <div className="inputBoxBtn">
                <input className="btn" type="button" defaultValue="CONTINUE" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="vehicleInfo">
          <div className="info1">
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
            <p className="p1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae dignissimos animi repudiandae doloribus tenetur libero!
            </p>
          </div>
          <div className="info1">
            <h4>Lorem ipsum.</h4>
            <p className="p2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              autem quasi molestias dolores maiores excepturi recusandae
              assumenda commodi aliquid. Optio laudantium quos ea pariatur
              cupiditate saepe suscipit veritatis iste quibusdam iusto excepturi
              consequatur mollitia nobis officiis facilis id, possimus explicabo
              perspiciatis repudiandae? Voluptatibus, rerum natus.
            </p>
            <p className="p2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              autem quasi molestias dolores maiores excepturi recusandae
              assumenda commodi aliquid. Optio laudantium quos ea pariatur
              cupiditate saepe suscipit veritatis iste quibusdam iusto excepturi
              consequatur mollitia nobis officiis facilis id, possimus explicabo
              perspiciatis repudiandae? Voluptatibus, rerum natus.
            </p>
          </div>
        </div>
        <div className="image">
          <img src="assets/bike.png" alt="bike-img" />
        </div>
      </div>
      <div className="footer">
        <div className="footerHeader">
          <h3>Lorem ipsum dolor sit amet.</h3>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
        </div>
        <div className="footerList">
          <div className="list1">
            <div className="subList">
              <div className="numberList">1</div>
              <div className="textList">Lorem ipsum dolor.</div>
            </div>
            <div className="subList">
              <div className="numberList">2</div>
              <div className="textList">Lorem ipsum dolor.</div>
            </div>
            <div className="subList">
              <div className="numberList">3</div>
              <div className="textList">Lorem ipsum dolor.</div>
            </div>
          </div>
          <div className="list2">
            <div className="subList">
              <div className="numberList">4</div>
              <div className="textList">Lorem ipsum dolor.</div>
            </div>
            <div className="subList">
              <div className="numberList">5</div>
              <div className="textList">Lorem ipsum dolor.</div>
            </div>
            <div className="subList">
              <div className="numberList">6</div>
              <div className="textList">Lorem ipsum dolor.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="subFooter">
        <div className="subFooter-container">
          <h3>Address</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            dignissimos eius a.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
