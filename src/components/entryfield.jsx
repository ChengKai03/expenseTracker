
// import React, { useState } from "react"
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
const { ipcRenderer } = window.require('electron');

const filter = createFilterOptions();

export default function Entryfield(){


  const [value, setValue] = React.useState(null);
  const [open, toggleOpen] = React.useState(false);
  // let descriptionOptions = [{title:'grocery'}]
  const [descriptionOptions, setDescriptionOptions] = React.useState();

  React.useEffect(() => {
    ipcRenderer.invoke('get-description').then((result) => {
      setDescriptionOptions(result)
    })
  }, [])

  const handleClose = () => {
    setDialogValue({
      title: '',
    });
    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState({
    title: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue({
      title: dialogValue.title,
    });
    ipcRenderer.invoke('add-description', dialogValue.title)
    handleClose();
  };
  
  const [details, setDetails] = React.useState({
    date : "",
    cost : 0,
    description : ""
  })

  const handlechange = (event) =>{
    const name = event.target.name
    const value = event.target.value
    // console.log(name, value)

    setDetails((prev) =>{
      return {...prev, [name]: value}
    })
  }
  // console.log(details)

  const inputDB = (event) => {
    //  event.preventDeafault()
    ipcRenderer.invoke('add-data', details)
  }



  return( 

      
    <>
      <span className="heading">Enter an Expense</span>

      <form onSubmit={inputDB} id="expense-form">
        <div className="expense-input-container">
          <label htmlFor="expense-date" className="expense-label">Date</label>
          <div className="input-element">
            <input type="date" className="expense-input" name="date" onChange={handlechange}/> 
          </div>         
        </div>

        <div className="expense-input-container">
          <label htmlFor="expense-cost" className="expense-label">Cost</label>
          <div className="input-element">
            <input type="number" name="cost" id="expense-input-cost" className="expense-input" min="0" step="0.01" onChange={handlechange}/> 
          </div>         

        </div>
        <div className="expense-input-container">
          <div className="input-element">
            {/* <input type="text" name="description" id="expense-input-description" className="expense-input" onChange={handlechange}/> */}
            <Autocomplete
              value={value}
              onChange={(event, newValue) => {
                if (typeof newValue === 'string') {
                  // timeout to avoid instant validation of the dialog's form.
                  setTimeout(() => {
                    toggleOpen(true);
                    setDialogValue({
                      title: newValue,
                    });
                  });
                } else if (newValue && newValue.inputValue) {
                  toggleOpen(true);
                  setDialogValue({
                    title: newValue.inputValue,
                  });
                } else {
                  setValue(newValue);
                }
              }}
              filterOptions={(options, params) => {
                const filtered = filter(options, params);

                if (params.inputValue !== '') {
                  filtered.push({
                    inputValue: params.inputValue,
                    title: `Add "${params.inputValue}"`,
                  });
                }

                return filtered;
              }}
              id="free-solo-dialog-demo"
              options={descriptionOptions}
              getOptionLabel={(option) => {
                // for example value selected with enter, right from the input
                if (typeof option === 'string') {
                  return option;
                }
                if (option.inputValue) {
                  return option.inputValue;
                }
                return option.title;
              }}
              selectOnFocus
              clearOnBlur
              handleHomeEndKeys
              renderOption={(props, option) => <li {...props}>{option.title}</li>}
              sx={{ width: 300 }}
              freeSolo
              renderInput={(params) => <TextField {...params} label="Description" />}
            />
            <Dialog open={open} onClose={handleClose}>
              <div>
                <DialogTitle>Add a new description</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Enter a description you would like to add!
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    value={dialogValue.title}
                    onChange={(event) =>
                      setDialogValue({
                        ...dialogValue,
                        title: event.target.value,
                      })
                    }
                    label="title"
                    type="text"
                    variant="standard"
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleSubmit}>Add</Button>
                </DialogActions>
              </div>
            </Dialog>
          </div>         
        </div>

        <button id="submit-button" type="submit">Add Expense</button>
      </form>
      
      

    </>
  )
}

