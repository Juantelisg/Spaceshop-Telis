import React, {useEffect, useState} from 'react'
import emailjs from 'emailjs-com';
import './styles/footer.css';

function FormContact() {
    const [emailEnviado, setEmailEnviado] = useState(false)
    const [emailError, setEmailError] = useState(false)


    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_gv43xgx','template_jmt1q18', e.target,'user_OSBIVL8aEhLKlz72i6YQm')
          .then(
            result => {
              console.log(result.text);
              console.log('ENVIADO');
              //Email enviado correctamente.
              setEmailEnviado(true)
              setEmailError(false)
              clearAlert(setEmailEnviado)
            },
            error => {
              console.log(error.text);
              setEmailEnviado(false)
              setEmailError(true)
              clearAlert(setEmailError)
            }
          );
    }

    function clearAlert(x) {
        setTimeout(() => {
            x(false)
        }, 5000);
    }

    
    
    return (
        <div>
            <div class="col-md-8 mb-5">
                <form id="contact-form" onSubmit={sendEmail} className="form">
                    <div class="row justify-content-around">
                        <div class="col form-group">
                            <label>
                                Nombre:
                            </label>
                            <input class="form-control" type="text" v-model="from_name" name="from_name" id="name"/>
                        </div>
        
                        <div class="col form-group">
                            <label>
                                Telefono:
                            </label>
                            <input class="form-control" type="number" v-model="from_number" name="contact_number">
                            </input>
                        </div>
                    </div>
                            
                    <div class="row justify-content-around">
                        <div class="col form-group">
                            <label>
                                Correo:
                            </label>
                            <input class="form-control" type="email" v-model="from_email" name="from_email">
                            </input>
                        </div>
                                
                        <div class="col form-group">
                            <label>
                                Area:
                            </label>
                            <select class="form-control" v-model="to_department" name="from_department">
                                <option selected>--Seleccione--</option>
                                <option value="1">Indumentaria</option>
                                <option value="2">Accesorios</option>
                                <option value="3">Telescopios</option>
                                <option value="3">Consulta</option>
                            </select>
                        </div>
                    </div>
                    <div class="row justify-content-around">
                        <div class="col form-group">
                            <label>
                                Mensaje:
                            </label>
                            <textarea class="form-control" v-model="message" name="message">
                            </textarea>
                        </div>
                           
                        <div class="col-6 footer-button">
                            <button class="btn btn-primary btn-lg button">
                                ENVIAR
                            </button>
                        </div>
                    </div>
                </form>
                {
                    emailEnviado ? 
                    //alert email enviado correctamente
                    <div class="alert alert-success" role="alert">
                        ¡Hemos recibido tu mensaje! Un asesor se pondra en contacto. 
                    </div>

                    : ""
                }
                {
                    emailError ?
                    //Alert error al enviar email
                    <div class="alert alert-danger" role="alert">
                        ¡Ha ocurrido un error! Intentalo mas tarde. 
                    </div>

                    : ""
                }
               
               
            </div>
        </div>
    )
}

export default FormContact;