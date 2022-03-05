//Stock of our drinks at home are categorized by Brand, and each brand has its unique array of flavors.
class Brand {
    constructor (name){
        this.name = name;
        this.flavors = [];
    }
}

class Flavor{
    constructor (name, size, amount){
        this.name = name;
        this.size = size;
        this.amount = amount
    }
}
//this.selectedBrand will be used to to call created brands under the Brand class. It is set to null, since we start off without any brand.
class Menu {
    constructor(){
        this.brands = [];
        this.selectedBrand = null;
    }
//selecting 0 breaks out of this "loop", Cancel also returns null, so normally it would've been considered to be "default"
    start() {
        let selection = this.showMainMenuOption();
        
        while (selection != 0){
            if (selection === null){
                alert ('Goodbye')
                return;
            }

            switch (selection) {
             case '1':
                 this.createBrand();
                 break;
             case '2':
                 this.viewBrand();
                 break;
             case '3':
                 this.deleteBrand();
                 break;
             case '4':
                 this.viewAllBrands();
                 break;
             case '0':
                 selection = 0;
                 break;
             default:
                 alert ('Please select available choices.');
            }
            selection = this.showMainMenuOption();
         }
         alert ('Goodbye') 
     }

     showMainMenuOption() {
        return prompt(`
        1)Create new Brand of Drinks
        2)View Brand
        3)Delete Brand
        4)Display All Brands 
        0)Exit
        `);
     }

     showBrandMenuOption(brandInfo){
         return prompt(`
         1)Create Flavor
         2)Edit Amount
         3)Delete Flavor
         0)Back
         ------` + '\n'+
         brandInfo
         );
     }

     viewAllBrands() {
         let brandString = '';
         for (let i = 0; i <this.brands.length; i++){
             brandString += i + ')' + this.brands[i].name + '\n';
         }
         alert(brandString);
     }

     createBrand() {
         let name = prompt('Enter the brand of a drink')
         this.brands.push(new Brand(name));
     }

     deleteBrand() {
        let index = prompt('Enter the index of the team you would like to delete')
        if (index > -1 && index < this.brands.length){
            
            alert (`${this.brands[index].name} is deleted`);
            this.brands.splice(index,1);
     } else { alert ('Brand is non-existent.')}
    }

     viewBrand() {
         let index = prompt('enter the index of the drink you would like to view');
         if (index > -1 && index < this.brands.length) {
             this.selectedBrand = this.brands[index]; 
             let description = 'Brand: ' + this.selectedBrand.name+ '\n';

             for (let i = 0; i < this.selectedBrand.flavors.length; i++){
                 description += (i) + ') ' + this.selectedBrand.flavors[i].name + '\n' 
                + 'Size: ' + this.selectedBrand.flavors[i].size + 
                ' - Amount: ' + this.selectedBrand.flavors[i].amount + '\n';
             }

             let selection = this.showBrandMenuOption(description);
             switch (selection){
                 case '1':
                     this.createFlavor();
                     break;
                 case '2':
                     this.editFlavor();
                     break;
                 case '3':
                     this.deleteFlavor();
                     break;
                 case '0':
                    this.showMainMenuOption();
                    break;  
             }    
         } else { alert ('Brand is non-existent.')}
     }
//This function pushs the flavor into the brand while acquiring the Flavor class
     createFlavor() {
         let name = prompt ('Enter new flavor: ')
         let size = prompt ('Enter drink size')
         let amount = prompt ('Enter amount for the drink')
         this.selectedBrand.flavors.push(new Flavor(name, size, amount));
     }

     editFlavor() {
         let index = prompt('Enter the index of the flavor you would like to delete')
         if (index > -1 && index < this.selectedBrand.flavors.length){
             this.selectedBrand.flavors[index].amount = prompt('Enter the updated amount');
        } else { alert ('Flavor is non-existent.')}
    }

     deleteFlavor() {
         let index = prompt('Enter the index of the flavor you would like to delete')
         if (index > -1 && index < this.selectedBrand.flavors.length){
             alert (`${this.selectedBrand.flavors[index].name} is deleted`);
             this.selectedBrand.flavors.splice(index,1);
         } else { alert ('Flavor is non-existent.')}
     }
}

let menu = new Menu();
menu.start();