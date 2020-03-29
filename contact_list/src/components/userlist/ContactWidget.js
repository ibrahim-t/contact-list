import React from 'react';
import {connect} from "react-redux";
import Contacts from "./Contacts";
import {doTableInit,doAddContact,doRowSelected} from "./actions";
import TemporaryDrawer from "../Drawer";
import ContactInfo from "../CardWidget/Cards"
import "../style/custom-style.css"


class  ContactsWidget extends React.Component {

  constructor(props){
    super(props)

  }
componentWillMount(){
  const Data={
    Cols:["BasicInfo","Company"],
    Rows:[
      {
        "BasicInfo":"Ibrahim",
        "Company":"private Org",
        "FullName":"Ibrahim Khaleelullah",
        "Email":"ibrahimt.khaleel@gmail.com",
        "Phone No":"+91 8681820764",
        "Address":"# FF-05 R.K builder ,Shivajinagar  Bangalore"

      },
    {
      "BasicInfo":"faisal",
      "Company":"private Org",
      "FullName":"Faisal Mohammed",
      "Email":"faisal.md@gmail.com",
      "Phone No":"+91 86818212-8",
      "Address":"# FF-05 R.K builder ,Shivajinagar  Bangalore"
    },
    {
      "BasicInfo":"Musaib",
      "Company":"private Org",
      "FullName":"Musaib Md",
      "Email":"musaib.md@gmail.com",
      "Phone No":"+91 8732936234",
      "Address":"# FF-05 R.K builder ,Shivajinagar  Bangalore"
    }
  ]
  }
  this.props.onTableInit({data:Data})


}

   render(){
     const {data,selectedData}=this.props;
     return    <div className="root-container">
     <div className="container-child-1">
     <TemporaryDrawer   style={{width:"500px"}}
     onAddClick={this.onAddButtonClick}
     onAddContact={this.props.onAddContact}

      />
      <Contacts
      selectedData={selectedData}
      data={data}
    onRowSelect={this.props.onRowSelected}
      />
      </div>
      <div className="container-child-2">
      
       <ContactInfo detail={selectedData} />
      </div>
     </div>;
    

}
}

const mapStateToProps=(state)=>{
  return {
    ...state,
  }
}

const mapDispatchToProps=dispatch=>{
  return {
  onTableInit:(data)=>dispatch(doTableInit(data)),
  onRowSelected:(selectedData)=>dispatch(doRowSelected(selectedData)),
  onAddContact:(data)=>dispatch(doAddContact(data)),


  }};
export default connect(mapStateToProps,mapDispatchToProps)(ContactsWidget);