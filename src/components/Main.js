import { useState} from "react";
import data from '../data.json'

import { Table, Button } from "react-bootstrap";

function Main(){

    const [index, setIndex] = useState(0)
    var [gTotal, setGTotal] = useState(0)

    const [rows, setRows] = useState([{
       // id:1,
       // name:data[index].name,

       // price:0,
       // uom: data[index].uom,
       // qty:data[index].qty,
       // total:0
    }])
    const [isEdit, setEdit] = useState(false);
    
    


    //function to add row
    const handleAdd = () => {
        setIndex(index+1)
        setRows([
            ...rows,
            {
                id: rows.length, 
                name: data[index].name,
                price: null,
                uom: data[index].uom,
                qty: data[index].qty,
                total: null
            },
        ]);
        setEdit(true);
    };

    //const handleEdit = (i) => {
        // If edit mode is true setEdit will 
        // set it to false and vice versa
        //setEdit(!isEdit);
   // };

     // Function to handle save
     const handleSave = () => {
        setEdit(!isEdit);
        
        setRows(rows);
        console.log("saved : ", rows);
        
    
    };


    // The handleInputChange handler can be set up to handle
    // many different inputs in the form, listen for changes 
    // to input elements and record their values in state
    const handleInputChange = (e, index,qty) => {
      //  setDisable(false);
        const { name, value } = e.target;
        console.log(value)
        var totalP = (e.target.value) * qty
       // setGTotal(gTotal+totalP)
        const list = [...rows];
        console.log(list)
        list[index][name] = value;
        list[index][`total`] = totalP; 
        setRows(list);
        console.log(rows)
        
    };


   const handleGT = ()=>{
      for(let i =1;i<rows.length;i++){
         gTotal += rows[i].total
        
      }
      setGTotal(gTotal);
    
   } 

    
    return(
        <div>
          {
           isEdit  ? (
              <div>
                <Button onClick={handleAdd}>
                
                  Add Items
                </Button><br></br><br></br>


                {rows.length !== 0 && (
                  <div>
                   
                      <Button  onClick={handleSave}>
                        
                        SAVE
                      </Button>
                    
                  </div>
                )}
              </div>
            ) : 
            (
              <div>
                <Button onClick={handleAdd}>
                  
                  Add Items
                </Button><br></br><br></br>
                {/*<Button onClick={handleEdit}>
                
                  EDIT
            </Button>*/}
              </div> 
           )
            }



<h1 className="text-center">Quotation for Vendor</h1>
<Table  striped bordered hover>
    <thead>
        <tr>
            <th>S.NO</th>
            <th>NAME OF MATERIAL</th>
            <th>PRICE</th>
            <th>UOM</th>
            <th>QTY</th>
            <th>TOTAL</th>
        </tr>
    </thead>
    <tbody>
     {
        rows.map((row, i) => (
            <tr key={i}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{
                    isEdit ? (
    
                            <input
                              value={row.price}
                              name="price"
                              onChange={(e) => handleInputChange(e, i,row.qty)}
                            />):
                            (
                                
                                  <h5 >
                                    {row.price}
                                  </h5>
                            )
                            }
                
                </td>
                <td>{row.uom}</td>
                <td>{row.qty}</td>
                <td>
                {
                    isEdit ? (
    
                            <input
                              value={row.total}
                              name="total"
                              
                            
                            />):
                            (
                                
                                  <h5 >
                                    {row.total}
                                  </h5>
                            )
                            }
                </td>










            </tr>




        ))


     }
     <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        
     </tr>
     <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        
     </tr>
     <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        
     </tr>
     <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td><h5>Grand Total:</h5></td>
        <td><h5>{gTotal}</h5></td>
        
     </tr>
     





    </tbody>

</Table>
{
    gTotal===0 ? <Button onClick={handleGT}>Ground Total</Button>: null
}





        </div>
    )
}


export default Main;