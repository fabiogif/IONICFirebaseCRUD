import { EditShoppingItemPage } from './../edit-shopping-item/edit-shopping-item';
import { ShoppingItem } from './../../models/shopping-item/shopping-item-interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AddShoppingListPage } from '../add-shopping-list/add-shopping-list'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  shoppingListRef$: FirebaseListObservable<ShoppingItem[]>

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private database: AngularFireDatabase,
              private acitonSheetCtrl: ActionSheetController
             ) {

              this.shoppingListRef$ = this.database.list('shopping-list');

  }

  selectShoppingItem(shoppingItem: ShoppingItem) {
    /* editar - deletar - cancelar*/

    this.acitonSheetCtrl.create({
      title: `${shoppingItem.itemName}`,
      buttons: [
        {
          text: 'Editar',
          handler: () =>{
            this.navCtrl.push(EditShoppingItemPage, { shoppingItemId: shoppingItem.$key});
          }
        },
        {
          text: 'Deletar',
          role: 'destructive',
          handler:()=>{  
            //Remover o shoppingItem
            this.shoppingListRef$.remove(shoppingItem.$key);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
            handler:()=>{
              console.log("chegou aqui então vamos editar");
            }
        }
      ]
    }).present();
  }
  navigateToAddShoppingPage() {
    this.navCtrl.push(AddShoppingListPage);
  }

}
