// import { useEffect, useState } from "react";


// const CountryCard = ({name,flagImg,flagAltTxt}) => {
//     return(
//         <div style={{
//          display:"flex",
//          justifyContent:"center",
//          alignItems:"center",
//          flexDirection:"column",
//          padding:"10px",
//          margin:"10px",
//          border:"1px solid black",
//          borderRadius:"8px",
//          width:"200px",
//          height:"200px"
//         }}
//         >
//             <img src={flagImg} alt={name} style={{width:"100px",height:"100px"}}
//             />
//             <h2>{name}</h2>
//         </div>
//     )
// }



// function Countries(){
// const  URL ="https://restcountries.com/v3.1/all";
// const [Countries,setcountries] = useState([]);
// console.log({Countries})



// useEffect(()=>{
//     fetch (URL)
//     .then((res) => res.json())
//     .then((data) => setcountries(data))
//      .catch((error) => console.error("Error:" ,error))
// },[]);


// return(
//     <div style={{
//         display : "flex",
//         flexWrap:"wrap",
//         alignItems:"center",
//         justifyContent:"center",
//         height:"100vh"
//     }}
//     >
//     {Countries.map((country)=>(
//     <CountryCard  name={country.name.common} flagImg={country.flags.png} flagAltTxt={country.flags.alt} />
//     ))}
//     </div>
// )
// }

// export default Countries;








import { useEffect, useState } from "react";


const CountryCard = ({ name, flagImg, flagAltTxt }) => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      padding: "10px",
      margin: "10px",
      border: "1px solid black",
      borderRadius: "8px",
      width: "200px",
      height: "200px"
    }}>
      <img src={flagImg} alt={flagAltTxt || `Flag of ${name}`} style={{ width: "100px", height: "100px" }} />
      <h2>{name}</h2>
    </div>
  );
}




function Countries() {
  const URL = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);
  console.log({ countries });

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh"
    }}>
      {countries.map((country) => (
        <CountryCard
          key={country.cca3}
          name={country.name.common}
          flagImg={country.flags.png}
          flagAltTxt={country.flags.alt}
        />
      ))}
    </div>
  );
}

export default Countries;
