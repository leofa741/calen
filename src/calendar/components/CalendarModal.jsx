
import Modal from 'react-modal'
import { useMemo, useState } from 'react'
import './Modal.css'
import Button from '@mui/material/Button';
import CloseIcon  from '@mui/icons-material/Close';
import { addHours } from 'date-fns';
import DatePicker, {registerLocale}from "react-datepicker";
import{es} from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'


registerLocale('es', es);

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

export const CalendarModal = () => {


    const [isOpen, setIsOpen] = useState(true);

    const [formValues, setFormValues] = useState({
        title: 'leo',
        notes: 'la nota',
        start: new Date(),
        end :addHours(new Date(), 1),
    })
    const [submitted, setSubmitted] = useState(false);

    const titleClass = useMemo(() => {   
        return formValues.title.length  > 0  ? 'is-valid' : 'is-invalid';   
    } , [ formValues.title]);


    const notesClass = useMemo(() => {  
      return formValues.notes.length  > 0  ? 'is-valid' : 'is-invalid';  
  } , [ formValues.notes]);
 
    
    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleDateChange = (e,changing) => {
        setFormValues({
            ...formValues,
            [changing]: e
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        const difference = formValues.end.getTime() - formValues.start.getTime();
        const hours = Math.ceil(difference / (1000 * 60 * 60));

        if (hours < 0) {            
            Swal.fire('Error', 'La fecha de inicio no puede ser mayor a la fecha de fin', 'error')        

         console.log(hours)
           return
             } 

           if(formValues.title === '' || formValues.notes === ''){
            Swal.fire('Error', 'Todos los campos son obligatorios', 'error')
             console.log('error')
               return
                }

                if(submitted){
                    Swal.fire('Exito', 'Evento creado con exito', 'success')
                    console.log('exito')
                }           
                          
          console.log(hours)
            console.log(formValues);
          }
  

    const closeModal = () => {
        setIsOpen(false)
    }

  return (
    <Modal
        isOpen={isOpen}        
        onRequestClose={closeModal}
        style={customStyles}
        closeTimeoutMS={200}
        className="modal"
        overlayClassName="modal-fondo"  
    >
        
    
<Button variant="contained" color="error" className='Button'   onClick={closeModal} endIcon={<CloseIcon />}>Close
</Button>


<h1> Nuevo evento </h1>
<hr />
<form className="container"  onSubmit={ handleSubmit } >
    <div className="form-group mb-2">
        <label>Fecha y hora inicio</label>
        <DatePicker
            selected={formValues.start}
            onChange={(e) => handleDateChange(e, 'start')}
            name="start"
            className="form-control"
            dateFormat="dd/MM/yyyy"
            locale="es"          
            placeholderText="Seleccione una fecha y hora"         
            required
        />
    </div>

    <div className="form-group mb-2">
        <label>Fecha y hora fin</label>
        <DatePicker
            selected={formValues.end}
            minDate={formValues.start}
            onChange={(e) => handleDateChange(e, 'end')}
            name="end"
            className="form-control"
            dateFormat="dd/MM/yyyy"
            locale="es"
            placeholderText="Seleccione una fecha y hora"
            required
        />
    </div>

    <hr />
    <div className="form-group mb-2">
        <label>Titulo y notas</label>
        <input 
            type="text" 
            className={`form-control ${titleClass}`}
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={formValues.title}
            onChange={handleChange}
        />
        <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
    </div>

    <div className="form-group mb-2">
        <textarea 
            type="text" 
            className={`form-control ${notesClass}`}
            placeholder="Notas"
            rows="5"
            name="notes"
            value={formValues.notes}  
            onChange={handleChange}
        ></textarea>
        <small id="emailHelp" className="form-text text-muted">Información adicional</small>
    </div>

    <button
        type="submit"
        className="btn btn-outline-primary btn-block"
    >
        <i className="far fa-save"></i>
        <span> Guardar</span>
    </button>
</form>

    </Modal>
  )
}
