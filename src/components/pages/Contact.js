import styles from './Contact.module.css'

function Contact(){
    return(
        <div className={styles.form_box}>
            <form>
                <div>
                    Nome Completo:<br />
             <input type="text" name="full_name" placeholder="Insira seu nome"/><br />
             </div>
                <div>
                    E-mail:<br />
                 <input type="text" name="email" placeholder="Insira seu e-Mail" /><br />
                 </div>
                 <div>
                     Estado:<br />
                 <select>
                    <option>Acre</option>
                    <option>Alagoas</option>
                    <option>Amapá</option>
                    <option>Amazonas</option>
                    <option>Bahia</option>
                    <option>Ceará</option>
                    <option>Distrito Federal</option>
                    <option>Espiríto Santo</option>
                    <option>Goiás</option>
                    <option>Maranhão</option>
                    <option>Mato Grosso</option>
                    <option>Mato Grosso do Sul</option>
                    <option>Minas Gerais</option>
                    <option>Pará</option>
                    <option>Paraíba</option>
                    <option>Paraná</option>
                    <option>Pernambuco</option>
                    <option>Piauí</option>
                    <option>Rio de Janeiro</option>
                    <option>Rio Grande do Norte</option>
                    <option>Rio Grande do Sul</option>
                    <option>Rondônia</option>
                    <option>Roraima</option>
                    <option>Santa Catarina</option>
                    <option>São Paulo</option>
                    <option>Sergipe</option>
                    <option>Tocantins</option>
                    </select><br />
                    </div>
                    <div>
                        Telefone:<br />
                    <input type="number" name="phone_number" placeholder="Insira seu telefone"/><br />
                    </div>
                    Mensagem:<br />
                    <textarea name="textarea" rows="5" cols="50" className={styles.textArea}></textarea><br />
                    <button type="submit" name="btnsubmit" className={styles.btn_submit}>Enviar</button>
            </form>
        
        </div>

    )
}

export default Contact