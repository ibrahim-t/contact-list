import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Input from '@material-ui/core/Input';
import "./style/custom-style.css"

import Button from '@material-ui/core/Button';

export default function TemporaryDrawer(props) {
  const [state, setState] = React.useState(0);

  const toggleDrawer = () => {
const {onAddClick}=props

    setState(!state );
  };
  const [fullName,setName]=React.useState("");
  const [company,setCompany]=React.useState("");
  const [email,setEmail]=React.useState("");
  const [phoneNo,setPhoneNo]=React.useState("");
  const [address,setAddress]=React.useState("");
const getContact=()=>{
  const {onAddContact}=props;
  const formData={
    "BasicInfo":fullName,
    "FullName":fullName,
    "Company":company,
    "Email": email,
    "Phone No":phoneNo,
    "Address":address,
  }
  onAddContact(formData);
  toggleDrawer()
}


  return <React.Fragment key={"add-row"}>
          <Button variant="contained" color="primary" onClick={()=>toggleDrawer()}>Add</Button>
          <Drawer    anchor={"right"} open={state} onClose={()=>toggleDrawer()}>
          <div className="drawer-container"  >
          Full Name: <Input id="FullName" error={fullName?false:true} helperText={"enter FullName"} label="FullName" name="FullName" required={true} onChange={(e)=>setName(e.target.value)} value={fullName} variant="outlined" />
         Company Name: <Input id="Company" error={company?false:true} helperText={"Enter Company Name"} label="Company" name="Company" required={true} onChange={(e)=>setCompany(e.target.value)} value={company}variant="outlined" />
          Email: <Input id="Email" error={email?false:true} type="email" helperText={"Enter email"} label="Email" name="Email" required={true} onChange={(e)=>setEmail(e.target.value)} value={email} variant="outlined" />
          Phone No: <Input id="Phone No" error={phoneNo?false:true} type="number" helperText={"Enter Phone No."} label="Phone No" name="Phone No" required={true} onChange={(e)=>setPhoneNo(e.target.value)} value={phoneNo} variant="outlined" />
          Address: <Input id="Address" error={address?false:true} helperText={"Enter Address"} label="Address" name="Address" required={true} onChange={(e)=>setAddress(e.target.value)} value={address} variant="outlined" />
          <Button variant="contained" color="primary" onClick={()=>getContact()}>Add Contact</Button>
          </div>
          </Drawer>
          {props.children}
          </React.Fragment>;
}
