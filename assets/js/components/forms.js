import { connectFormData } from '../utility.js';
import { deposit } from '../functions.js';
import { withdraw } from '../functions.js';
import { send } from '../functions.js';

export function Forms() {

    this.btnPressed;
    this.currentUser;
    // this.updateAppDomData;

    //Dom Elements
    this.formId = "FormId"
    this.submitBtn = document.getElementById("SubmitButtonId")
    // this.cancelBtn = document.getElementById("CancelButtonId")

    // Add event listeners =
    this.submitBtn.onclick = (event) => {
        // console.log(this.currentUser)
        let actionFunction;
        switch(this.btnPressed){
            case ("depositBtnId"):
                actionFunction = deposit.bind(this)
                break
            case ("withdrawBtnId"):
                actionFunction = withdraw.bind(this)
                break
            case ("tranferFundsBtnId"):
                actionFunction = send.bind(this)
                break
            case ("settingsBtnId"):
                actionFunction = null;
                break
            default:
                //
                return
            
        }

        connectFormData(
            event,
            actionFunction,                                    
            this.formId,
            document.getElementById("formAlert"),
            document.getElementById("formErrorMessageId"),
            document.getElementById("formSuccessMessageId")
        )

        // Close modal
        this.closeModal()

        // Update contents in App dom
        // this.updateAppDomData()
        location.reload()    
    }

    
}