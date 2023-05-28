import React from "react";

export const Tab = ({title, index, callBack, activeTab}) => {

  const style = {
    card:{
      display: "flex",
      flexDirection:"column",
      justifyContent:"center",
      width:"20%", 
      minWidth:170,
      backgroundColor: activeTab == title ? "#1199bd" : "black",
      border: "2px solid #1199bd",
      color:"white",
      padding: "10px 15px",
      borderRadius:10
    },

    heading:{
      fontSize:25,
      fontWeight:500,
      margin:0,
      textAlign:"center"
    }
  }

  return (
    <div key={index} style={style.card} onClick={()=>callBack(title)}>
      <h5 style={style.heading}>
          {title.replace("_", " ")}
      </h5>
    </div>
  );
};

export default Tab;
