import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartbyadminComponent } from './components/chartbyadmin/chartbyadmin.component';
import { StatbyadminComponent } from './components/statbyadmin/statbyadmin.component';
import { MenubyadminComponent } from './components/menubyadmin/menubyadmin.component';
import { LoginbyadminComponent } from './components/loginbyadmin/loginbyadmin.component';
import { FooterbyadminComponent } from './components/footerbyadmin/footerbyadmin.component';
import { HeaderbyadminComponent } from './components/headerbyadmin/headerbyadmin.component';
import { ChartbyuserComponent } from './components/chartbyuser/chartbyuser.component';
import { StatbyuserComponent } from './components/statbyuser/statbyuser.component';
import { MenubyuserComponent } from './components/menubyuser/menubyuser.component';
import { LoginbyuserComponent } from './components/loginbyuser/loginbyuser.component';
import { FooterbyuserComponent } from './components/footerbyuser/footerbyuser.component';
import { HeaderbyuserComponent } from './components/headerbyuser/headerbyuser.component';
import { CreateadminbyadminComponent } from './components/createadminbyadmin/createadminbyadmin.component';
import { CreateuserbyadminComponent } from './components/createuserbyadmin/createuserbyadmin.component';
import { CreateproductbyadminComponent } from './components/createproductbyadmin/createproductbyadmin.component';
import { CreatecategorieproductbyadminComponent } from './components/createcategorieproductbyadmin/createcategorieproductbyadmin.component';
import { CreateinventoryproductbyadminComponent } from './components/createinventoryproductbyadmin/createinventoryproductbyadmin.component';
import { CreatediscountbyadminComponent } from './components/creatediscountbyadmin/creatediscountbyadmin.component';
import { CreateorderdetailbyadminComponent } from './components/createorderdetailbyadmin/createorderdetailbyadmin.component';
import { CreateorderitembyadminComponent } from './components/createorderitembyadmin/createorderitembyadmin.component';
import { CreatepaymentdetailbyadminComponent } from './components/createpaymentdetailbyadmin/createpaymentdetailbyadmin.component';
import { CreatecarteitembyadminComponent } from './components/createcarteitembyadmin/createcarteitembyadmin.component';
import { CreateshoppingsessionbyadminComponent } from './components/createshoppingsessionbyadmin/createshoppingsessionbyadmin.component';
import { CreateuserpaiementbyadminComponent } from './components/createuserpaiementbyadmin/createuserpaiementbyadmin.component';
import { CreateuserprofilbyadminComponent } from './components/createuserprofilbyadmin/createuserprofilbyadmin.component';
import { CreatenotificationbyadminComponent } from './components/createnotificationbyadmin/createnotificationbyadmin.component';
import { CreatemessagebyadminComponent } from './components/createmessagebyadmin/createmessagebyadmin.component';
import { EditadminbyadminComponent } from './components/editadminbyadmin/editadminbyadmin.component';
import { EdituserbyadminComponent } from './components/edituserbyadmin/edituserbyadmin.component';
import { EditproductbyadminComponent } from './components/editproductbyadmin/editproductbyadmin.component';
import { EditcategorieproductbyadminComponent } from './components/editcategorieproductbyadmin/editcategorieproductbyadmin.component';
import { EditinventoryproductbyadminComponent } from './components/editinventoryproductbyadmin/editinventoryproductbyadmin.component';
import { EditdiscountbyadminComponent } from './components/editdiscountbyadmin/editdiscountbyadmin.component';
import { EditorderdetailbyadminComponent } from './components/editorderdetailbyadmin/editorderdetailbyadmin.component';
import { EditorderitembyadminComponent } from './components/editorderitembyadmin/editorderitembyadmin.component';
import { EditpaymentdetailbyadminComponent } from './components/editpaymentdetailbyadmin/editpaymentdetailbyadmin.component';
import { EditcarteitembyadminComponent } from './components/editcarteitembyadmin/editcarteitembyadmin.component';
import { EditshoppingsessionbyadminComponent } from './components/editshoppingsessionbyadmin/editshoppingsessionbyadmin.component';
import { EdituserpaiementbyadminComponent } from './components/edituserpaiementbyadmin/edituserpaiementbyadmin.component';
import { EdituserprofilbyadminComponent } from './components/edituserprofilbyadmin/edituserprofilbyadmin.component';
import { EditnotificationbyadminComponent } from './components/editnotificationbyadmin/editnotificationbyadmin.component';
import { EditmessagebyadminComponent } from './components/editmessagebyadmin/editmessagebyadmin.component';
import { ListadminbyadminComponent } from './components/listadminbyadmin/listadminbyadmin.component';
import { ListuserbyadminComponent } from './components/listuserbyadmin/listuserbyadmin.component';
import { ListproductbyadminComponent } from './components/listproductbyadmin/listproductbyadmin.component';
import { ListcategorieproductbyadminComponent } from './components/listcategorieproductbyadmin/listcategorieproductbyadmin.component';
import { ListinventoryproductbyadminComponent } from './components/listinventoryproductbyadmin/listinventoryproductbyadmin.component';
import { ListdiscountbyadminComponent } from './components/listdiscountbyadmin/listdiscountbyadmin.component';
import { ListorderdetailbyadminComponent } from './components/listorderdetailbyadmin/listorderdetailbyadmin.component';
import { ListorderitembyadminComponent } from './components/listorderitembyadmin/listorderitembyadmin.component';
import { ListpaymentdetailbyadminComponent } from './components/listpaymentdetailbyadmin/listpaymentdetailbyadmin.component';
import { ListcarteitembyadminComponent } from './components/listcarteitembyadmin/listcarteitembyadmin.component';
import { ListshoppingsessionbyadminComponent } from './components/listshoppingsessionbyadmin/listshoppingsessionbyadmin.component';
import { ListuserpaiementbyadminComponent } from './components/listuserpaiementbyadmin/listuserpaiementbyadmin.component';
import { ListuserprofilbyadminComponent } from './components/listuserprofilbyadmin/listuserprofilbyadmin.component';
import { ListnotificationbyadminComponent } from './components/listnotificationbyadmin/listnotificationbyadmin.component';
import { ListmessagebyadminComponent } from './components/listmessagebyadmin/listmessagebyadmin.component';
import { DetailadminbyadminComponent } from './components/detailadminbyadmin/detailadminbyadmin.component';
import { DetailuserbyadminComponent } from './components/detailuserbyadmin/detailuserbyadmin.component';
import { DetailproductbyadminComponent } from './components/detailproductbyadmin/detailproductbyadmin.component';
import { DetailcategorieproductbyadminComponent } from './components/detailcategorieproductbyadmin/detailcategorieproductbyadmin.component';
import { DetailinventoryproductbyadminComponent } from './components/detailinventoryproductbyadmin/detailinventoryproductbyadmin.component';
import { DetaildiscountbyadminComponent } from './components/detaildiscountbyadmin/detaildiscountbyadmin.component';
import { DetailorderdetailbyadminComponent } from './components/detailorderdetailbyadmin/detailorderdetailbyadmin.component';
import { DetailorderitembyadminComponent } from './components/detailorderitembyadmin/detailorderitembyadmin.component';
import { DetailpaymentdetailbyadminComponent } from './components/detailpaymentdetailbyadmin/detailpaymentdetailbyadmin.component';
import { DetailcarteitembyadminComponent } from './components/detailcarteitembyadmin/detailcarteitembyadmin.component';
import { DetailshoppingsessionbyadminComponent } from './components/detailshoppingsessionbyadmin/detailshoppingsessionbyadmin.component';
import { DetailuserpaiementbyadminComponent } from './components/detailuserpaiementbyadmin/detailuserpaiementbyadmin.component';
import { DetailuserprofilbyadminComponent } from './components/detailuserprofilbyadmin/detailuserprofilbyadmin.component';
import { DetailnotificationbyadminComponent } from './components/detailnotificationbyadmin/detailnotificationbyadmin.component';
import { DetailmessagebyadminComponent } from './components/detailmessagebyadmin/detailmessagebyadmin.component';
import { CreateadminbyuserComponent } from './components/createadminbyuser/createadminbyuser.component';
import { CreateuserbyuserComponent } from './components/createuserbyuser/createuserbyuser.component';
import { CreateproductbyuserComponent } from './components/createproductbyuser/createproductbyuser.component';
import { CreatecategorieproductbyuserComponent } from './components/createcategorieproductbyuser/createcategorieproductbyuser.component';
import { CreateinventoryproductbyuserComponent } from './components/createinventoryproductbyuser/createinventoryproductbyuser.component';
import { CreatediscountbyuserComponent } from './components/creatediscountbyuser/creatediscountbyuser.component';
import { CreateorderdetailbyuserComponent } from './components/createorderdetailbyuser/createorderdetailbyuser.component';
import { CreateorderitembyuserComponent } from './components/createorderitembyuser/createorderitembyuser.component';
import { CreatepaymentdetailbyuserComponent } from './components/createpaymentdetailbyuser/createpaymentdetailbyuser.component';
import { CreatecarteitembyuserComponent } from './components/createcarteitembyuser/createcarteitembyuser.component';
import { CreateshoppingsessionbyuserComponent } from './components/createshoppingsessionbyuser/createshoppingsessionbyuser.component';
import { CreateuserpaiementbyuserComponent } from './components/createuserpaiementbyuser/createuserpaiementbyuser.component';
import { CreateuserprofilbyuserComponent } from './components/createuserprofilbyuser/createuserprofilbyuser.component';
import { CreatenotificationbyuserComponent } from './components/createnotificationbyuser/createnotificationbyuser.component';
import { CreatemessagebyuserComponent } from './components/createmessagebyuser/createmessagebyuser.component';
import { EditadminbyuserComponent } from './components/editadminbyuser/editadminbyuser.component';
import { EdituserbyuserComponent } from './components/edituserbyuser/edituserbyuser.component';
import { EditproductbyuserComponent } from './components/editproductbyuser/editproductbyuser.component';
import { EditcategorieproductbyuserComponent } from './components/editcategorieproductbyuser/editcategorieproductbyuser.component';
import { EditinventoryproductbyuserComponent } from './components/editinventoryproductbyuser/editinventoryproductbyuser.component';
import { EditdiscountbyuserComponent } from './components/editdiscountbyuser/editdiscountbyuser.component';
import { EditorderdetailbyuserComponent } from './components/editorderdetailbyuser/editorderdetailbyuser.component';
import { EditorderitembyuserComponent } from './components/editorderitembyuser/editorderitembyuser.component';
import { EditpaymentdetailbyuserComponent } from './components/editpaymentdetailbyuser/editpaymentdetailbyuser.component';
import { EditcarteitembyuserComponent } from './components/editcarteitembyuser/editcarteitembyuser.component';
import { EditshoppingsessionbyuserComponent } from './components/editshoppingsessionbyuser/editshoppingsessionbyuser.component';
import { EdituserpaiementbyuserComponent } from './components/edituserpaiementbyuser/edituserpaiementbyuser.component';
import { EdituserprofilbyuserComponent } from './components/edituserprofilbyuser/edituserprofilbyuser.component';
import { EditnotificationbyuserComponent } from './components/editnotificationbyuser/editnotificationbyuser.component';
import { EditmessagebyuserComponent } from './components/editmessagebyuser/editmessagebyuser.component';
import { ListadminbyuserComponent } from './components/listadminbyuser/listadminbyuser.component';
import { ListuserbyuserComponent } from './components/listuserbyuser/listuserbyuser.component';
import { ListproductbyuserComponent } from './components/listproductbyuser/listproductbyuser.component';
import { ListcategorieproductbyuserComponent } from './components/listcategorieproductbyuser/listcategorieproductbyuser.component';
import { ListinventoryproductbyuserComponent } from './components/listinventoryproductbyuser/listinventoryproductbyuser.component';
import { ListdiscountbyuserComponent } from './components/listdiscountbyuser/listdiscountbyuser.component';
import { ListorderdetailbyuserComponent } from './components/listorderdetailbyuser/listorderdetailbyuser.component';
import { ListorderitembyuserComponent } from './components/listorderitembyuser/listorderitembyuser.component';
import { ListpaymentdetailbyuserComponent } from './components/listpaymentdetailbyuser/listpaymentdetailbyuser.component';
import { ListcarteitembyuserComponent } from './components/listcarteitembyuser/listcarteitembyuser.component';
import { ListshoppingsessionbyuserComponent } from './components/listshoppingsessionbyuser/listshoppingsessionbyuser.component';
import { ListuserpaiementbyuserComponent } from './components/listuserpaiementbyuser/listuserpaiementbyuser.component';
import { ListuserprofilbyuserComponent } from './components/listuserprofilbyuser/listuserprofilbyuser.component';
import { ListnotificationbyuserComponent } from './components/listnotificationbyuser/listnotificationbyuser.component';
import { ListmessagebyuserComponent } from './components/listmessagebyuser/listmessagebyuser.component';
import { DetailadminbyuserComponent } from './components/detailadminbyuser/detailadminbyuser.component';
import { DetailuserbyuserComponent } from './components/detailuserbyuser/detailuserbyuser.component';
import { DetailproductbyuserComponent } from './components/detailproductbyuser/detailproductbyuser.component';
import { DetailcategorieproductbyuserComponent } from './components/detailcategorieproductbyuser/detailcategorieproductbyuser.component';
import { DetailinventoryproductbyuserComponent } from './components/detailinventoryproductbyuser/detailinventoryproductbyuser.component';
import { DetaildiscountbyuserComponent } from './components/detaildiscountbyuser/detaildiscountbyuser.component';
import { DetailorderdetailbyuserComponent } from './components/detailorderdetailbyuser/detailorderdetailbyuser.component';
import { DetailorderitembyuserComponent } from './components/detailorderitembyuser/detailorderitembyuser.component';
import { DetailpaymentdetailbyuserComponent } from './components/detailpaymentdetailbyuser/detailpaymentdetailbyuser.component';
import { DetailcarteitembyuserComponent } from './components/detailcarteitembyuser/detailcarteitembyuser.component';
import { DetailshoppingsessionbyuserComponent } from './components/detailshoppingsessionbyuser/detailshoppingsessionbyuser.component';
import { DetailuserpaiementbyuserComponent } from './components/detailuserpaiementbyuser/detailuserpaiementbyuser.component';
import { DetailuserprofilbyuserComponent } from './components/detailuserprofilbyuser/detailuserprofilbyuser.component';
import { DetailnotificationbyuserComponent } from './components/detailnotificationbyuser/detailnotificationbyuser.component';
import { DetailmessagebyuserComponent } from './components/detailmessagebyuser/detailmessagebyuser.component';
import { VisiteurheaderComponent } from './components/visiteurheader/visiteurheader.component';
import { VisiteurfooterComponent } from './components/visiteurfooter/visiteurfooter.component';
import { VisiteurmenuComponent } from './components/visiteurmenu/visiteurmenu.component';
import { VisiteurmyaccountComponent } from './components/visiteurmyaccount/visiteurmyaccount.component';
import { VisiteurloginComponent } from './components/visiteurlogin/visiteurlogin.component';
import { VisiteurregisterComponent } from './components/visiteurregister/visiteurregister.component';
import { VisiteurmycartComponent } from './components/visiteurmycart/visiteurmycart.component';
import { VisiteurchekoutComponent } from './components/visiteurchekout/visiteurchekout.component';
import { VisiteurmywishlistComponent } from './components/visiteurmywishlist/visiteurmywishlist.component';
import { VisiteurgalleryComponent } from './components/visiteurgallery/visiteurgallery.component';
import { VisiteuraccordionComponent } from './components/visiteuraccordion/visiteuraccordion.component';
import { VisiteurcarrousselComponent } from './components/visiteurcarroussel/visiteurcarroussel.component';
import { VisiteurmapComponent } from './components/visiteurmap/visiteurmap.component';
import { VisiteurtabComponent } from './components/visiteurtab/visiteurtab.component';
import { VisiteurproducttagComponent } from './components/visiteurproducttag/visiteurproducttag.component';
import { VisiteurpopularbrandComponent } from './components/visiteurpopularbrand/visiteurpopularbrand.component';
import { VisiteurlatestproductComponent } from './components/visiteurlatestproduct/visiteurlatestproduct.component';
import { VisiteurclientssaysComponent } from './components/visiteurclientssays/visiteurclientssays.component';
import { VisiteurnewproductComponent } from './components/visiteurnewproduct/visiteurnewproduct.component';
import { VisiteurmostviewedComponent } from './components/visiteurmostviewed/visiteurmostviewed.component';
import { VisiteurhotsalesComponent } from './components/visiteurhotsales/visiteurhotsales.component';
import { VisiteurlatestblogComponent } from './components/visiteurlatestblog/visiteurlatestblog.component';
import { VisiteurnewarrivalComponent } from './components/visiteurnewarrival/visiteurnewarrival.component';
import { VisiteurbestsellerComponent } from './components/visiteurbestseller/visiteurbestseller.component';
import { VisiteurhotdealComponent } from './components/visiteurhotdeal/visiteurhotdeal.component';
import { VisiteurfeaturedComponent } from './components/visiteurfeatured/visiteurfeatured.component';
import { VisiteurcategoryComponent } from './components/visiteurcategory/visiteurcategory.component';
import { VisiteursearchComponent } from './components/visiteursearch/visiteursearch.component';
import { VisiteurproductdetailComponent } from './components/visiteurproductdetail/visiteurproductdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartbyadminComponent,
    StatbyadminComponent,
    MenubyadminComponent,
    LoginbyadminComponent,
    FooterbyadminComponent,
    HeaderbyadminComponent,
    ChartbyuserComponent,
    StatbyuserComponent,
    MenubyuserComponent,
    LoginbyuserComponent,
    FooterbyuserComponent,
    HeaderbyuserComponent,
    CreateadminbyadminComponent,
    CreateuserbyadminComponent,
    CreateproductbyadminComponent,
    CreatecategorieproductbyadminComponent,
    CreateinventoryproductbyadminComponent,
    CreatediscountbyadminComponent,
    CreateorderdetailbyadminComponent,
    CreateorderitembyadminComponent,
    CreatepaymentdetailbyadminComponent,
    CreatecarteitembyadminComponent,
    CreateshoppingsessionbyadminComponent,
    CreateuserpaiementbyadminComponent,
    CreateuserprofilbyadminComponent,
    CreatenotificationbyadminComponent,
    CreatemessagebyadminComponent,
    EditadminbyadminComponent,
    EdituserbyadminComponent,
    EditproductbyadminComponent,
    EditcategorieproductbyadminComponent,
    EditinventoryproductbyadminComponent,
    EditdiscountbyadminComponent,
    EditorderdetailbyadminComponent,
    EditorderitembyadminComponent,
    EditpaymentdetailbyadminComponent,
    EditcarteitembyadminComponent,
    EditshoppingsessionbyadminComponent,
    EdituserpaiementbyadminComponent,
    EdituserprofilbyadminComponent,
    EditnotificationbyadminComponent,
    EditmessagebyadminComponent,
    ListadminbyadminComponent,
    ListuserbyadminComponent,
    ListproductbyadminComponent,
    ListcategorieproductbyadminComponent,
    ListinventoryproductbyadminComponent,
    ListdiscountbyadminComponent,
    ListorderdetailbyadminComponent,
    ListorderitembyadminComponent,
    ListpaymentdetailbyadminComponent,
    ListcarteitembyadminComponent,
    ListshoppingsessionbyadminComponent,
    ListuserpaiementbyadminComponent,
    ListuserprofilbyadminComponent,
    ListnotificationbyadminComponent,
    ListmessagebyadminComponent,
    DetailadminbyadminComponent,
    DetailuserbyadminComponent,
    DetailproductbyadminComponent,
    DetailcategorieproductbyadminComponent,
    DetailinventoryproductbyadminComponent,
    DetaildiscountbyadminComponent,
    DetailorderdetailbyadminComponent,
    DetailorderitembyadminComponent,
    DetailpaymentdetailbyadminComponent,
    DetailcarteitembyadminComponent,
    DetailshoppingsessionbyadminComponent,
    DetailuserpaiementbyadminComponent,
    DetailuserprofilbyadminComponent,
    DetailnotificationbyadminComponent,
    DetailmessagebyadminComponent,
    CreateadminbyuserComponent,
    CreateuserbyuserComponent,
    CreateproductbyuserComponent,
    CreatecategorieproductbyuserComponent,
    CreateinventoryproductbyuserComponent,
    CreatediscountbyuserComponent,
    CreateorderdetailbyuserComponent,
    CreateorderitembyuserComponent,
    CreatepaymentdetailbyuserComponent,
    CreatecarteitembyuserComponent,
    CreateshoppingsessionbyuserComponent,
    CreateuserpaiementbyuserComponent,
    CreateuserprofilbyuserComponent,
    CreatenotificationbyuserComponent,
    CreatemessagebyuserComponent,
    EditadminbyuserComponent,
    EdituserbyuserComponent,
    EditproductbyuserComponent,
    EditcategorieproductbyuserComponent,
    EditinventoryproductbyuserComponent,
    EditdiscountbyuserComponent,
    EditorderdetailbyuserComponent,
    EditorderitembyuserComponent,
    EditpaymentdetailbyuserComponent,
    EditcarteitembyuserComponent,
    EditshoppingsessionbyuserComponent,
    EdituserpaiementbyuserComponent,
    EdituserprofilbyuserComponent,
    EditnotificationbyuserComponent,
    EditmessagebyuserComponent,
    ListadminbyuserComponent,
    ListuserbyuserComponent,
    ListproductbyuserComponent,
    ListcategorieproductbyuserComponent,
    ListinventoryproductbyuserComponent,
    ListdiscountbyuserComponent,
    ListorderdetailbyuserComponent,
    ListorderitembyuserComponent,
    ListpaymentdetailbyuserComponent,
    ListcarteitembyuserComponent,
    ListshoppingsessionbyuserComponent,
    ListuserpaiementbyuserComponent,
    ListuserprofilbyuserComponent,
    ListnotificationbyuserComponent,
    ListmessagebyuserComponent,
    DetailadminbyuserComponent,
    DetailuserbyuserComponent,
    DetailproductbyuserComponent,
    DetailcategorieproductbyuserComponent,
    DetailinventoryproductbyuserComponent,
    DetaildiscountbyuserComponent,
    DetailorderdetailbyuserComponent,
    DetailorderitembyuserComponent,
    DetailpaymentdetailbyuserComponent,
    DetailcarteitembyuserComponent,
    DetailshoppingsessionbyuserComponent,
    DetailuserpaiementbyuserComponent,
    DetailuserprofilbyuserComponent,
    DetailnotificationbyuserComponent,
    DetailmessagebyuserComponent,
    VisiteurheaderComponent,
    VisiteurfooterComponent,
    VisiteurmenuComponent,
    VisiteurmyaccountComponent,
    VisiteurloginComponent,
    VisiteurregisterComponent,
    VisiteurmycartComponent,
    VisiteurchekoutComponent,
    VisiteurmywishlistComponent,
    VisiteurgalleryComponent,
    VisiteuraccordionComponent,
    VisiteurcarrousselComponent,
    VisiteurmapComponent,
    VisiteurtabComponent,
    VisiteurproducttagComponent,
    VisiteurpopularbrandComponent,
    VisiteurlatestproductComponent,
    VisiteurclientssaysComponent,
    VisiteurnewproductComponent,
    VisiteurmostviewedComponent,
    VisiteurhotsalesComponent,
    VisiteurlatestblogComponent,
    VisiteurnewarrivalComponent,
    VisiteurbestsellerComponent,
    VisiteurhotdealComponent,
    VisiteurfeaturedComponent,
    VisiteurcategoryComponent,
    VisiteursearchComponent,
    VisiteurproductdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


  
 }
