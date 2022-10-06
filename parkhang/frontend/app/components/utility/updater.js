export default function update(r){
let updater=null;
    switch(r){
    case 1:
       updater =  document.getElementById('update-list');
       break;
    case 2:
       updater =  document.getElementById('update-list-2');
       break;

}
if(updater) updater.click();
}