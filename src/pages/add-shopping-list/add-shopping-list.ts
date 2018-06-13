import { ShoppingItem } from './../../models/shopping-item/shopping-item-interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
/**
 * Generated class for the AddShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-shopping-list',
  templateUrl: 'add-shopping-list.html',
})
export class AddShoppingListPage {

  shoppingItem = {} as ShoppingItem;

  shoppingItemRef$: FirebaseListObservable<ShoppingItem[]>

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private database: AngularFireDatabase) {
    this.shoppingItemRef$ = this.database.list('shopping-list');

  }


  addShoppingItem(shoppingItem: ShoppingItem) {
    //Criacao do objeto itemname e itemNumber
    //console.log(shoppingItem);
    this.shoppingItemRef$.push({
      itemName: this.shoppingItem.itemName,
      itemNumber: Number(this.shoppingItem.itemNumber)
    });

    this.shoppingItem = {} as ShoppingItem;

    this.navCtrl.pop();


  }

}


