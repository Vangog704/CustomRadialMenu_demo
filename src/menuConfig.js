import Icons from './icons.json';

export default {
    angle: 180,
    aperture: 360,
    radius: 110,
    height: 100,
    btns:[
        {height: 75, title:"QR", icon: Icons.qr, path:'/Qr',
            btns:[
                {height: 50, title:"Pen", icon: Icons.pen, path:'/Pen', action: ()=>{ console.log('action'); return false; }},
                {height: 50, title:"DATA", icon: Icons.data, path:'/data', action: ()=>{ console.log('action'); return true; }},
                {height: 50, title:"Bones", icon: Icons.bones},
                {height: 50, title:"Sword",icon: Icons.sword},
            ]
        },
        {aperture: .2, height: 75, title:"Pen", icon: Icons.pen},
        {height: 125, title:"Sword",icon: Icons.sword,
            btns:[
                {aperture: .2, height: 50, title:"Pen", icon: Icons.pen},
                {height: 50, title:"DATA", icon: Icons.data},
                {height: 50, title:"QR", icon: Icons.qr},
                {height: 50, title:"Bones", icon: Icons.bones},
                {height: 50, title:"Sword",icon: Icons.sword},
            ]
        },
        {aperture: .2, height: 75, title:"Bones", icon: Icons.bones,
            btns:[
                {height: 50, title:"Pen", icon: Icons.pen},
                {height: 50, title:"DATA", icon: Icons.data,},
            ]
        },
        {height: 75, title:"DATA", icon: Icons.data,
            btns:[
                {height: 50, title:"Pen", icon: Icons.pen,
                    btns:[
                        {height: 50, title:"Pen", icon: Icons.pen},
                        {height: 50, title:"Sword",icon: Icons.sword},
                    ]   
                },
                {height: 100, title:"Sword",icon: Icons.sword},
            ]
        },
        {aperture: .2, height: 75, title:"Head Phones", icon: Icons.headphone,
            btns:[
                {height: 50, title:"Pen", icon: Icons.pen},
                {aperture: .7, height: 50, title:"DATA", icon: Icons.data,
                    btns:[
                        {height: 30, title:"DATA", icon: Icons.data},
                        {height: 30, title:"QR", icon: Icons.qr},
                        {height: 30, title:"Bones", icon: Icons.bones},
                        {aperture: .5, height: 30, title:"ZIP", icon: Icons.zip,
                            btns:[
                                {height: 50, title:"Pen", icon: Icons.pen},
                                {height: 50, title:"Sword",icon: Icons.sword},
                            ]  
                        },
                    ]
                },
            ]
        },
        {height: 50, title:"ZIP", icon: Icons.zip},
        // {height: 70, title:"Hex", icon: Icons.hex},
        // {height: 100, title:"Fire", icon: Icons.fire},
        // {height: 60, title:"Hex", icon: Icons.hex},
        // {height: 50, title:"Fire", icon: Icons.fire},
        // {height: 30, title:"Hex", icon: Icons.hex},
        // {height: 50, title:"Fire", icon: Icons.fire},
    ]
}