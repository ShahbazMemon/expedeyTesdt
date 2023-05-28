import React, { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import FormItems from "../cores/form/FormItems";
import Tab from "../cores/Tab";
import CountMemo from "./CountMemo";
import CountRender from "./CountRender";

export const About = () => {

  const [basicFields, setBasicFields] = useState({ 
    Website_Development:[
    {
      label: "How many pages do you estimate we'll need to design / develop? Note: Page templates count as one page. For example, a 'Product' page template could be used for each product you offer.",
      key: "webRP1",
      min:1,
      max:50,
      type: "Slider",
      itemStyle:{margin:'15px 0px', color:"white", fontSize:"22px"},
      value: 1,
      meta: { amount: 200 },
      onChange: (e)=>{onHandleChange(e,"Website_Development","webRP1")}
    },
    {
      label: "Are we creating all the copywriting for these pages?",
      type: "Radio",
      key: "websiteType1",
      value: 1,
      data: [
        {
          label:"Yes, we need you to write the copy for the pages.",
          value:1,
          amount:1000
        },
        {
          label:"No, we've got copywriting handled.",
          value:2,
          amount:0
        }
      ],
      itemStyle:{margin:'15px 0px', color:"white", fontSize:"22px"},
      onChange: (e)=> onHandleChange(e, "Website_Development","websiteType1")
    },
    {
      label: "Will the pages require us to create custom graphics?",
      type: "Radio",
      key: "websiteType2",
      value: 3,
      data: [
        {
          label:"Yes, I'd love you to create illustrations for each page.",
          value:3,
          amount:1000
        },
        {
          label:"No, we'll be providing photography or using stock graphics/photos.",
          value:4,
          amount:0
        }
      ],
      itemStyle:{margin:'15px 0px', color:"white", fontSize:"22px"},
      onChange: (e)=> onHandleChange(e, "Website_Development","websiteType2")
    },
    {
      label: "Are we building any advanced functionality? Example: Integrating with an ERP, or dynamically displaying data from a database",
      type: "Radio",
      key: "websiteType3",
      value: 5,
      data: [
        {
          label:"Yes, we'd like our website to tie into our other systems.",
          value:5,
          amount:1000
        },
        {
          label:"No, our website will be mainly lead generating / static.",
          value:6,
          amount:0
        }
      ],
      itemStyle:{margin:'15px 0px', color:"white", fontSize:"22px"},
      onChange: (e)=> onHandleChange(e,"Website_Development","websiteType3")
    },
    ],
    Report_Design:[
      {
        label: "Number of pages:",
        key: "reportRP1",
        min:1,
        max:400,
        type: "Slider",
        value: 1,
        meta: { amount: 200 },
        itemStyle:{margin:'15px 0px', color:"white", fontSize:"22px"},
        onChange: (e)=>{onHandleChange(e,"Report_Design","reportRP1")}
      },
      {
        label: "How many custom graphics will we need to create? (These are graphics we need to custom design and that can't be found via stock sites or provided by client).",
        key: "reportRP2",
        min:1,
        max:400,
        type: "Slider",
        value: 1,
        meta: { amount: 200 },
        itemStyle:{margin:'15px 0px', color:"white", fontSize:"22px"},
        onChange: (e)=>{onHandleChange(e,"Report_Design","reportRP2")}
      },
      {
        label: "Are we creating the overall style of the report or is there already a defined style guide?",
        type: "Radio",
        key: "reportType1",
        value: 7,
        data: [
          {
            label:"Yes, we need you to create an overall style for the report.",
            value:7,
            amount:1000
          },
          {
            label:"No, we have a defined style guide for you to use.",
            value:8,
            amount:0
          }
        ],
        itemStyle:{margin:'15px 0px', color:"white", fontSize:"22px"},
        onChange: (e)=> onHandleChange(e,"Report_Design","reportType1")
      },
      {
        label: "Do you need us to make the document 508 compliant?",
        type: "Radio",
        key: "reportType2",
        value: 9,
        data: [
          {
            label:"Yes, we need to comply with Section 508 Accessibility Standards.",
            value:9,
            amount:1000
          },
          {
            label:"No, we don't need to have 508 compliance.",
            value:10,
            amount:0
          }
        ],
        itemStyle:{margin:'15px 0px', color:"white", fontSize:"22px"},
        onChange: (e)=> onHandleChange(e,"Report_Design","reportType2")
      },
    ],
    Video_Production:[
      {
        label: "How many minutes will the video be?",
        key: "videoRP1",
        min:1,
        max:25,
        type: "Slider",
        value: 1,
        meta: { amount: 200 },
        itemStyle:{margin:'15px 0px', color:"white", fontSize:"22px"},
        onChange: (e)=> onHandleChange(e,"Video_Production","videoRP1")  
      },
      {
        label: "How polished do you want the video to be?",
        key: "videoType1",
        type: "Radio",
        value: 12,
        data: [
          {
            label:"I'm not looking for anything crazy—just professional.",
            value:11,
            amount:2000
          },
          {
            label:"I don't need Hollyood, but it should be pretty cinematic.",
            value:12,
            amount:1000
          },
          {
            label:"I want Hollywood level of production",
            value:13,
            amount:0
          }
        ],
        itemStyle:{margin:'15px 0px', color:"white", fontSize:"22px"},
        onChange: (e)=> onHandleChange(e,"Video_Production","videoType1")
      },
      {
        label: "Will travel outside of Denver metro be required?",
        key: "videoType2",
        type: "Radio",
        value: 14,
        data: [
          {
            label:"Yes",
            value:14,
            amount:1000
          },
          {
            label:"No",
            value:15,
            amount:0
          },
          
        ],
        itemStyle:{margin:'15px 0px', color:"white", fontSize:"22px"},
        onChange: (e)=> onHandleChange(e,"Video_Production","videoType2")  
      },
      
    ],
    Animation:[
      {
        label: "How many minutes will the video be?",
        key: "animationRP1",
        min:1,
        max:25,
        type: "Slider",
        value: 1,
        meta: { amount: 200 },
        itemStyle:{margin:'15px 0px', color:"white", fontSize:"22px"},
        onChange: (e)=> onHandleChange(e,"Animation","animationRP1")
      },
      {
        label: "How detail oriented does the animation need to be?",
        key: "animation1",
        type: "Radio",
        value: 16,
        data: [
          {
            label:"Fair amount of attention to detail, but we aren't going to nit-pick",
            value:16,
            amount:1000
          },
          {
            label:"Very detailed oriented, we need to make sure all the small details are right",
            value: 17,
            amount: 0
          },
          
        ],
        itemStyle:{margin:'15px 0px', color:"white", fontSize:"22px"},
        onChange: (e)=> onHandleChange(e,"Animation","animation1") 
      },
      
    ],  
  })
  const [totalCost, setTotalCost] = useState(0);
  const [count, setCount] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [tabs, setTabs] = useState(Object.keys(basicFields));
  const [activeTab, setActiveTab] = useState(searchParams.get('activeTab'));
  const params = {activeTab};
  
  useEffect(()=>{
    if (!activeTab) {
      setActiveTab(tabs[0]);
    }
    setParams();
    onFinish();
  },[activeTab])
  
  useEffect(()=>{
    onFinish();
  }, [basicFields]);


  // some functions
  const callBack = (title) =>{
    setActiveTab(title);
  }

  const setParams = () =>{
    setSearchParams(params);  
  }

  const onHandleChange = (e, tab, key) =>{ 
      let index = basicFields[tab].findIndex(object => object.key === key );
      basicFields[tab][index].value = e.target.value;
      setBasicFields({...basicFields});
  }

  const onFinish = () =>{
    let total = 0; 
        basicFields[activeTab]?.map((ele)=>{
      if (ele.type == "Radio") {
         let selected = ele.data.filter((ele1)=>{
          return ele.value == ele1.value;
        });
        total += selected[0]?.["amount"] ?? 0;
      } else{
        total += (ele.value * ele.meta?.amount);
      }
    })
    setTotalCost();
    setTotalCost(total);

  }
  // end functions
  return (
    <>
      <div>
        <div style={style.tabSec}>
          <div style={style.horizontal}>
            {tabs?.map((tab, index)=>{
              return <Tab key={index} title={tab} index={index} callBack={callBack} activeTab={activeTab}/>
            })}
          </div>
        </div>
        <div style={style.box}>
          <form style={{width:"100%"}}>
              <FormItems FormFields={basicFields[activeTab]} />
          </form>
          <div style={{textAlign:"end"}}>
            <h2 style={style.totalCostEstimate}>Total Cost Estimate:</h2>
            <h1 style={style.totalCost}>{`$${totalCost}.00`}</h1>  
          </div>
        </div>
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
        <div style={style.card} onClick={()=>setCount(count+1)}>
          <h5 style={style.heading}>
            Increment count
          </h5>
        </div>
          <CountMemo count={count}/>
          <div style={style.card} onClick={()=>setCount(count-1)}>
            <h5 style={style.heading}>
              Decrement count 
            </h5>
          </div>
          <CountRender count={count}/>
        </div>
      </div>
    </>
  );
};

const style = {
  card:{
    display: "flex",
    flexDirection:"column",
    justifyContent:"center",
    width:"10%", 
    minWidth:100,
    backgroundColor: "#1199bd",
    border: "2px solid #1199bd",
    color:"white",
    padding: "10px 15px",
    borderRadius:10
  },

  heading:{
    fontSize:15,
    fontWeight:500,
    margin:0,
    textAlign:"center"
  },

  horizontal : {
    display:"flex", flexDirection:"row", justifyContent:"space-between"
  },
  box: {
    width: "70%", margin:"25px auto", border: "2px solid #1199bd", borderRadius: 10, color: "#fff", padding: "30px 40px"
  },
  totalCostEstimate: {color:"white", margin:"1.5em 0px 0px 0px"},
  totalCost: {color:"#1199bd", fontSize:"4em", margin:0},
  tabSec: {width: "60%", margin:"25px auto", padding:"25px 0"}

};

export default About;
