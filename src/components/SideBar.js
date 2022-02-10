import { useState } from "react/cjs/react.development";

function SideBar(props) {
  const handleElectronics = () => {
    props.filterset({
      ...props.filterval,
      electronics: !props.filterset.electronics,
    });
  };

  const handleMan = () => {
    props.filterset({ ...props.filterval, man: !props.filterset.man });
  };

  const handleWoman = () => {
    props.filterset({ ...props.filterval, woman: !props.filterset.woman });
  };

  const handleJewelry = () => {
    props.filterset({
      ...props.filterval,
      jewelery: !props.filterset.jewelery,
    });
  };

  const handleFiveStars = () => {
    props.starset({ ...props.starval, fiveStars: !props.starset.fiveStars });
  };
  const handleFourStars = () => {
    props.starset({ ...props.starval, fourStars: !props.starset.fourStars });
  };
  const handleThreeStars = () => {
    props.starset({ ...props.starval, threeStars: !props.starset.threeStars });
  };
  const handleTwoStars = () => {
    props.starset({ ...props.starval, twoStars: !props.starset.twoStars });
  };
  const handleOneStars = () => {
    props.starset({ ...props.starval, oneStars: !props.starset.oneStars });
  };

  console.log(props.filterval);

  return (
    <div style={{ margin: 50 }}>
      <div>
        <h4>Categories</h4>
      </div>
      <input
        type="checkbox"
        onChange={handleElectronics}
        id="electronics"
        name="electronics"
        value="electronics"
      />
      <label for="electronics"> Electronics </label> <br />
      <input
        type="checkbox"
        onChange={handleMan}
        id="mens-clothing"
        name="mens-clothing"
        value="men-clothing"
      />
      <label for="mens-cloth"> Mens clothing </label>
      <br />
      <input
        type="checkbox"
        onChange={handleWoman}
        id="womens-cloth"
        name="womens-cloth"
        value="womens-cloth"
      />
      <label for="womens-cloth"> Womens clothing </label> <br />
      <input
        type="checkbox"
        onChange={handleJewelry}
        id="jewelery"
        name="jewelery"
        value="jewelery"
      />
      <label for="jewelery"> Jewelery </label> <br />
      <hr />
      <h4>Rating</h4>
      <input
        type="checkbox"
        onChange={handleOneStars}
        id="oneStars"
        name="oneStars"
        value="oneStars"
      />
      <label for="oneStars"> &#x2605;</label>
      <br />{" "}
      <input
        type="checkbox"
        onChange={handleTwoStars}
        id="twoStars"
        name="twoStars"
        value="twoStars"
      />
      <label for="twoStars"> &#x2605;&#x2605;</label>
      <br />{" "}
      <input
        type="checkbox"
        onChange={handleThreeStars}
        id="threeStars"
        name="threeStars"
        value="threeStars"
      />
      <label for="threeStars"> &#x2605;&#x2605;&#x2605;</label>
      <br />{" "}
      <input
        type="checkbox"
        onChange={handleFourStars}
        id="fourStars"
        name="fourStars"
        value="fourStars"
      />
      <label for="fourStars"> &#x2605;&#x2605;&#x2605;&#x2605;</label>
      <br />{" "}
      <input
        type="checkbox"
        onChange={handleFiveStars}
        id="fiveStars"
        name="fiveStars"
        value="fiveStars"
      />
      <label for="fiveStars"> &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</label>
      <br />
      <hr />
      <p>Other</p>
      <p>About</p>
    </div>
  );
}

export { SideBar };
