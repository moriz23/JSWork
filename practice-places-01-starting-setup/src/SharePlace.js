import { Modal } from './UI/Model';
import { Map } from './UI/Map';

class PlaceFinder{
  constructor(){
    const addressForm = document.querySelector('form').bind(this);
    const locateBtn = document.querySelector('#locate-btn').bind(this);

    locateBtn.addEventListener('click', this.locateUserHandler);
    addressForm.addEventListener('click', this.findAddressHandler);
  }

  selectPlace(coordinates){
    this.map = new Map(coordinates);
  }

  locateUserHandler() {
    if(!navigator.geolocation){
      alert("Location feature is not available this browser. Please use a more modern browser or enter address manually.")
      return;
    }
    const modal = new Modal('loading-modal-content', 'Loading location - please wait');
    modal.show();
    navigator.geolocation.getCurrentPosition(successResult => {
      modal.hide();
      const coordinates = {
        lat: successResult.coords.latitude ,
        lng: successResult.coords.longitude
      };
      this.selectPlace(coordinates);
    }, error => {
      modal.hide();
      alert('Could not locate you, please enter an address manually!')
    })
  }

  findAddressHandler() {

  }
}

new PlaceFinder();