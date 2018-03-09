/*
 * File: app/view/DashboardViewController.js
 *
 * This file was generated by Sencha Architect version 3.5.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('CBS.view.DashboardViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dashboard',

    autochange: function() {
        i=1;
        var me=this;
        var vmd=me.getViewModel();
        var interValId=setInterval(function(){
            i++;
            if(i<40){
                vmd.set('dashboardPic','resources/images/ActorPhotos/'+i+'.jpg');
            } else{
                i=0;
            }
        },3000);
        console.log(interValId);
        vmd.set('interValId',interValId);
    },

    onImageAfterRender: function(component, eOpts) {
        this.autochange();
    },

    onImageClick: function(image) {
        var intervalId=vmd.get('interValId');
        console.log('clearing interval:'+intervalId);
        clearInterval(intervalId);
    }

});