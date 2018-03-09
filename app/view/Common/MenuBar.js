/*
 * File: app/view/Common/MenuBar.js
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

Ext.define('CBS.view.Common.MenuBar', {
    extend: 'Ext.container.Container',
    alias: 'widget.menuBar',

    requires: [
        'CBS.view.Common.MenuBarViewModel',
        'CBS.view.Common.MenuBarViewController',
        'Ext.button.Split',
        'Ext.menu.Menu',
        'Ext.menu.Item'
    ],

    controller: 'common.menubar',
    viewModel: {
        type: 'common.menubar'
    },
    cls: 'header',
    itemId: 'menuBar',
    layout: 'table',

    items: [
        {
            xtype: 'splitbutton',
            cls: 'menu-btn',
            height: 30,
            itemId: 'actorsMenu',
            margin: '0 0 0 15',
            text: 'Actors',
            menu: {
                xtype: 'menu',
                itemId: 'actorsMenu',
                width: 120,
                items: [
                    {
                        xtype: 'menuitem',
                        text: 'Male',
                        listeners: {
                            click: 'onMenuitemClick'
                        }
                    }
                ]
            }
        }
    ]

});