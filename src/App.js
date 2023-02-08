import Post from './HW_16/Post';
import './App.css';



const ANAKIN_IMAGE = "https://m.media-amazon.com/images/I/51SgxtdaowL._AC_SL1000_.jpg";
const RAY_IMAGE = "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/03/star-wars-order.png";





function App() {
  return (
    <Post author={{
      name: "Anakin skywalker",
      photo: ANAKIN_IMAGE,
      nickname: "@dart_vader"
      }}
      content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
      image={RAY_IMAGE}
      date={"26 февр."}
      statistics= {{
        business: "105",
        like: "245",
        desktop: "45"
      }}
      />
    );
}

export default App;
