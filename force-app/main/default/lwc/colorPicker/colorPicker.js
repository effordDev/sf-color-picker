import { api, LightningElement } from 'lwc';
import getRecord from '@salesforce/apex/ColorPickerHelper.getRecord';
import { updateRecord } from 'lightning/uiRecordApi';

export default class ColorPicker extends LightningElement {
     @api recordId
     @api colorField = ''
     @api colorFieldLabel = ''

     record = {}

     connectedCallback() {
          this.init()
     }

     get color() {
          return this.record[this.colorField] || ''
     }
     async init() {
          console.log('this.recordId => ', this.recordId)
          console.log('this.colorField => ', this.colorField)

          const recordId = this.recordId
          const field = this.colorField
          this.record = await getRecord({ recordId, field })

          console.log('this.record')
          console.log(JSON.parse(JSON.stringify(this.record)))
     }

     async handleColor(event) {
          const value = event.detail.value

          const record = {
               fields: {
                    Id: this.recordId,
                    [this.colorField]: value
               }
          }

          console.log(record)
          console.log(JSON.parse(JSON.stringify(record)))
          await updateRecord(record)
     }
}