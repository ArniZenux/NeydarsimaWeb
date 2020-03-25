import styled from 'styled-components';

export const DisplayDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  color:#036;
  overflow:auto;
  .header {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    color: #036;
  }
  .table {
    width:100%;
    border-spacing: 0px;
    th {
      padding-top: 8px;
      padding-bottom: 8px;
      padding-left: 4px;
      text-align: center;
      background-color: #005090;
      color: white;
    }
    td {
      padding-top: 8px;
      padding-bottom: 8px;
      padding-left: 4px;
      text-align: center;
      color: #005090;
    }
    tr {

    }
    #sum {
      >td{border-top: 1px solid #036;}
      font-weight: 600;
    }
    > tbody > tr{
        :nth-child(odd){
            background: #eaf3fa;
        }
    }
  }
  .chartDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-bottom: 8px;
    padding-top: 8px;
    > h5 {
        margin:4px;
        padding:0px;
      }
    .chart {
      display: flex;
      width: 50%;
      justify-content: center;
      align-items: center;
      padding: 16px;
    }
    .display {
      display: flex;
      width: 100%;
    }
    .testing{
      display:flex;
      justify-content:center;
      margin:0px;
      padding:0px;
    }
  }
`;

export const TripDiv = styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
align-items:center;
width: 100%;
max-width: 800px;
height: 80px;
border-top: 1px solid #036;
color:#036;
.species{
    display:flex;
    height:100%;
    flex:1;
    color:#036;
    justify-content:center; 
    align-items:center;
}
.tripId{
    display:flex;
    height:100%;
    flex:1;
    color:#036;
    justify-content:center; 
    align-items:center;
}
.date{
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    height:70px;
    flex:1;
    color:#036;
    justify-content:center; 
    align-items:center;
    > p,h3{
        margin:8px;
    }
}
.button{
    display:flex;
    height:100%;
    flex:1;
    color:#036;
    justify-content:center; 
    align-items:center;
}
`
export const HeaderContainer = styled.div`
display: flex;
width: 100%;
height: 100px;
background: #005090;
position: fixed;
z-index: 2;
#first {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 1;
  > div {
    display: inline-block;
    justify-content: center;
    align-items: center;
    height: 56px;
    width: 56px;
    @media only screen and (max-width: 2000px) {
      height: 40px;
    width: 40px;
    }
    @media only screen and (max-width: 800px) {
      height: 32px;
    width: 32px;
    }
    position: relative;
    :hover .img {
      transform: rotate(90deg);
      transition: 0.2s ease-in;
    }
    :hover #content {
      visibility: visible;
      opacity: 1;
      transition: visibility 0s, opacity 0.2s linear;
    }
  }
  .img {
    height: 90%;
  }
}
#secnd {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 2;
  > img {
    height: 45%;
  }
}
#last {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 1;
}
#content {
  visibility: hidden;
  display: flex;
  position: absolute;
  z-index: 2;
  justify-content: space-evenly;
  flex-direction: column;
  opacity: 0;
  width: 100px;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}
.normal {
  display: flex;
  width: 100%;
  padding: 8px;
  text-decoration: none;
  color: #036;
  font-size: 20;
  :hover {
    font-weight: 600;
  }
}
`;

export const Menu = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    height:150px;
    max-width:800px;
    box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.5);
    @media only screen and (max-width: 800px) {
          justify-content:space-evenly;
        }
    .img{
        display:flex;
        flex:2;
        height:100%;
        @media only screen and (max-width: 800px) {
          display:none;
        }
        >img{
            height:100%;
            width:99.7%;
        }
    }
    .shipInfo{
        display:flex;
        flex-direction:column;
        justify-content:center;
        color:#036;
        flex:1;
        h4, h3 {
            margin:8px;
        }
    }
    .select{
        display:flex;
        flex-direction:column;
        height:100%;
        flex:2;
        justify-content:center;
        align-items:center;
        color:#036;
        h4, h3 {
            margin:0px;
        }
    }
    .tripInfo{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:flex-end;
        height:100%;
        flex:2;
        color:#036;
        h4, h3 {
            margin:8px;
        }
        @media only screen and (max-width: 800px) {
          align-items: flex-start;
          flex:1;
        }
    }
`
export const TubInfo = styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
align-items:flex-end;
width: 100%;
max-width: 800px;
height: 40px;
padding-bottom:8px;
padding-top:8px;
color:#036;
:hover{
    border-bottom: 1px solid #036;
}
> div{
    display:flex;
    justify-content:center;
    align-items:center;
    flex:1;
    border: 0px solid red;
    height:100%;
    padding-left:8px;
    padding-right:8px;
}
.size{
    border: 0px solid red;
    height:100%;
}
.Karid{
    border: 0px solid red;
    height:100%;
}
.description{
    display:flex;
    flex: 1;
    height:100%;
    padding-left: 8px;
    justify-content:flex-start;
    align-items:center;
}
.info{
    display:flex;
    flex: 1;
    height:100%;
    padding-right: 16px;
    justify-content:flex-end;
    align-items:center;
}
`
export const TripInfo = styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
align-items:flex-end;
width: 100%;
max-width: 800px;
height: 72px;
padding-bottom:8px;
padding-top:8px;
border-bottom: 1px solid #036;
color:#036;
.Date{
    border: 0px solid red;
    height:50%;
}
.about{
    display:flex;
    flex: 1;
    height:100%;
    padding-left: 8px;
    justify-content:flex-start;
    align-items:center;
}
.info{
    display:flex;
    flex: 1;
    height:100%;
    padding-right: 16px;
    justify-content:flex-end;
    align-items:center;
}
`
export const AlertDiv = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  width:97%;
  max-width:800px;
  background: #FFCF9E;
  padding:8px;
  margin-top:4px;
  border-radius:4px;
  color:#036;
  > h4{
    margin:4px;
  }
  > p {
    margin:6px;
  }
`
export const Slot = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
min-height:250px;
box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.5);
max-width:800px;
margin-top:16px;
.header{
    display:flex;
    width: 100%;
    justify-content:center;
    align-items:center;
    color:#036;
}
`
export const ButtonBar = styled.div`
    display: flex;
    width: 70%;
    height:60px;
    margin: 0px;
    justify-content: space-evenly;
    align-items: center;
    font-size: 16px;
    @media only screen and (max-width: 800px) {
        width:100%;
    }
    .is-active {
        display:flex;
        justify-content:center;
        align-items: center;
        height:50%;
        font-weight: 700;
        border-bottom: 2px solid #036;
        box-shadow: 0 4px 2px -3px #036;
        > p {
            margin: 0px;
            color: #036;
        }
    }
    .normal {   
        display:flex;
        justify-content:center;
        align-items: center;  
        text-decoration: none;
        color: #036;
        height:50%;
        > p {
            margin: 0px;
        }
        :hover {
            text-decoration: none;
            padding: 0px;
            font-weight:700;
            border-bottom: 2px solid #036;
        }
    }
        
`
export const SelectHollContainer = styled.div<{isSelected?: boolean}>`
display: flex;
height: 60%;
width:100px;
justify-content: center;
align-items: center;
color: #036;
border-bottom: ${props => props.isSelected ? '1px solid #036' : 'none'};
box-shadow: ${props => props.isSelected ? '0px 7px 3px -4px #036' : 'none'};
:hover{
  font-weight:550;
  border-bottom: 1px solid #036;
  box-shadow: 0px 7px 3px -4px #036;
}
`
export const DashBoardContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
max-width: 2000px;
flex-grow: 1;
flex-wrap: wrap;
justify-content: center;
.slot {
  min-height: 500px;
  flex-grow: 1;
  min-width: 800px;
  max-width: 1000px;
  margin: 8px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.5);
}
.menu {
  height: 300px;
  flex-grow: 1;
  min-width: 800px;
  max-width: 1000px;
  margin: 8px;
  margin-top: 16px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.5);
}
.column {
  display:flex;
  flex-direction:column;
  width: 50%;
  min-width: 800px;
  @media only screen and (max-width: 1650px) {
          justify-content:center;
        }
        @media only screen and (max-width: 800px) {
          width:100%;
          min-width:350px;
        }
  .menu {
    display:flex;
    flex-direction:column;
    height: 300px;
    flex-grow: 1;
    min-width: 800px;
    max-width: 1000px;
    margin-top: 8px;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.5);
    .logo {
      height: 45%;
      width:150px;
      >img {
          height:100%;
          width:100%;
      }
    }
    .select{
          display:flex;
          flex-direction:column-reverse;
          width:100%;
          height: 55%;
          align-self: flex-end;
      }
  }
  .smallSlot {
    display:flex;
    min-height: 400px;
    flex-grow: 0;
    max-width: 1000px;
    margin: 8px;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.5);
  }
  .medSlot {
    height: 400px;
    display:flex;
    flex-direction:column;
    align-items:center;
    flex-grow: 1;
    max-width: 1000px;
    margin: 8px;
    padding:4px;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.5);
    overflow:auto;
  }
  .bigSlot{
    display:flex;
    flex-direction:column;
    flex-grow: 0;
    max-width: 1000px;
    margin: 8px;
    padding:4px;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.5);
    overflow:auto;
  }
  .statSlot {
    display:flex;
    flex-direction:column;
    align-items:center;
    flex-grow:1;
    max-height:500px;
    max-width: 1000px;
    margin: 8px;
    padding:4px;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.5);
    overflow:auto;
  }
  .totalSlot{
    display:flex;
    flex-direction:column;
    flex-grow: 0;
    
    max-height:1000px;
    margin: 8px;
    padding:4px;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.5);
    overflow:auto;
  }
}
`;
export const DivSettings = styled.div`
    display:flex;
    position:absolute;
    flex-direction:column;
    top: 0px;
    left: 0px;
    width: 250px;
    z-index: 1;
    box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.2);
    padding:8px;
    background:white;
    .label{
        margin-left: 16px;
    }
    > img {
        height:40px;
        width:40px;
        @media only screen and (max-width: 800px) {
            height:30px;
            width:30px;
        }
    }
    > label {
        color:#036;
        font-size:16px;
        font-weight:600;
        margin-top: 8px;
    }
`
export const ButtonSettings = styled.div`
    display:flex;
    position:absolute;
    flex-direction:column;
    top: 0px;
    left: 0px;
    height: 50px;
    width: 50px;
    z-index: 1;
    padding:8px;
     > img{
        height: 100%;
        width: 100%;
    }
    @media only screen and (max-width: 800px) {
        height:40px;
        width:40px;
        }
`
export const DateTimeStyle = styled.div`
    .rdt {
        position: relative;
        margin: 8px;
        background-color: transparent;
        color: #036;
        border-style: solid;
        border-color: #036;
        border-width: 1px;
        border-radius: 16px;
        padding: 4px;
          > input{
            border:none;
            font-size:15px;
            padding-left: 4px;
            color:#036;
            height:20px;
          }
        .from-control{
        }
      }
      .rdtPicker {
        display: none;
        position: absolute;
        width: 250px;
        padding: 4px;
        margin-top: 1px;
        z-index: 99999 !important;
        background: #fff;
        box-shadow: 0 1px 3px rgba(0,0,0,.1);
        border: 1px solid #f9f9f9;
      }
      .rdtOpen .rdtPicker {
        display: block;
      }
      .rdtStatic .rdtPicker {
        box-shadow: none;
        position: static;
      }
      
      .rdtPicker .rdtTimeToggle {
        text-align: center;
      }
      
      .rdtPicker table {
        width: 100%;
        margin: 0;
      }
      .rdtPicker td,
      .rdtPicker th {
        text-align: center;
        height: 28px;
      }
      .rdtPicker td {
        cursor: pointer;
      }
      .rdtPicker td.rdtDay:hover,
      .rdtPicker td.rdtHour:hover,
      .rdtPicker td.rdtMinute:hover,
      .rdtPicker td.rdtSecond:hover,
      .rdtPicker .rdtTimeToggle:hover {
        background: #eeeeee;
        cursor: pointer;
      }
      .rdtPicker td.rdtOld,
      .rdtPicker td.rdtNew {
        color: #999999;
      }
      .rdtPicker td.rdtToday {
        position: relative;
      }
      .rdtPicker td.rdtToday:before {
        content: '';
        display: inline-block;
        border-left: 7px solid transparent;
        border-bottom: 7px solid #428bca;
        border-top-color: rgba(0, 0, 0, 0.2);
        position: absolute;
        bottom: 4px;
        right: 4px;
      }
      .rdtPicker td.rdtActive,
      .rdtPicker td.rdtActive:hover {
        background-color: #428bca;
        color: #fff;
        text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
      }
      .rdtPicker td.rdtActive.rdtToday:before {
        border-bottom-color: #fff;
      }
      .rdtPicker td.rdtDisabled,
      .rdtPicker td.rdtDisabled:hover {
        background: none;
        color: #999999;
        cursor: not-allowed;
      }
      
      .rdtPicker td span.rdtOld {
        color: #999999;
      }
      .rdtPicker td span.rdtDisabled,
      .rdtPicker td span.rdtDisabled:hover {
        background: none;
        color: #999999;
        cursor: not-allowed;
      }
      .rdtPicker th {
        border-bottom: 1px solid #f9f9f9;
      }
      .rdtPicker .dow {
        width: 14.2857%;
        border-bottom: none;
        cursor: default;
      }
      .rdtPicker th.rdtSwitch {
        width: 100px;
      }
      .rdtPicker th.rdtNext,
      .rdtPicker th.rdtPrev {
        font-size: 21px;
        vertical-align: top;
      }
      
      .rdtPrev span,
      .rdtNext span {
        display: block;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none;   /* Chrome/Safari/Opera */
        -khtml-user-select: none;    /* Konqueror */
        -moz-user-select: none;      /* Firefox */
        -ms-user-select: none;       /* Internet Explorer/Edge */
        user-select: none;
      }
      
      .rdtPicker th.rdtDisabled,
      .rdtPicker th.rdtDisabled:hover {
        background: none;
        color: #999999;
        cursor: not-allowed;
      }
      .rdtPicker thead tr:first-child th {
        cursor: pointer;
      }
      .rdtPicker thead tr:first-child th:hover {
        background: #eeeeee;
      }
      
      .rdtPicker tfoot {
        border-top: 1px solid #f9f9f9;
      }
      
      .rdtPicker button {
        border: none;
        background: none;
        cursor: pointer;
      }
      .rdtPicker button:hover {
        background-color: #eee;
      }
      
      .rdtPicker thead button {
        width: 100%;
        height: 100%;
      }
      
      td.rdtMonth,
      td.rdtYear {
        height: 50px;
        width: 25%;
        cursor: pointer;
      }
      td.rdtMonth:hover,
      td.rdtYear:hover {
        background: #eee;
      }
      
      .rdtCounters {
        display: inline-block;
      }
      
      .rdtCounters > div {
        float: left;
      }
      
      .rdtCounter {
        height: 100px;
      }
      
      .rdtCounter {
        width: 40px;
      }
      
      .rdtCounterSeparator {
        line-height: 100px;
      }
      
      .rdtCounter .rdtBtn {
        height: 40%;
        line-height: 40px;
        cursor: pointer;
        display: block;
      
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none;   /* Chrome/Safari/Opera */
        -khtml-user-select: none;    /* Konqueror */
        -moz-user-select: none;      /* Firefox */
        -ms-user-select: none;       /* Internet Explorer/Edge */
        user-select: none;
      }
      .rdtCounter .rdtBtn:hover {
        background: #eee;
      }
      .rdtCounter .rdtCount {
        height: 20%;
        font-size: 1.2em;
      }
      
      .rdtMilli {
        vertical-align: middle;
        padding-left: 8px;
        width: 48px;
      }
      
      .rdtMilli input {
        width: 100%;
        font-size: 1.2em;
        margin-top: 37px;
      }
      
      .rdtTime td {
        cursor: default;
      }
`