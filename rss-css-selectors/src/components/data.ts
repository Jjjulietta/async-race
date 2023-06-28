export interface Elements {
  name: string,
  tag: string,
  tagOpened: string,
  tagClosed: string,
  className: string,
  nameClass: string,
  id?: string
}

export const plate: Elements = {
  name: 'plate', tag: '<plate></plate>', tagOpened: '<plate>', tagClosed: '</plate>', className: 'plate', nameClass: '<plate class="small">', id: '<plate id="colored">',
};

export const orange: Elements = {
  name: 'orange', tag: '<orange></orange>', tagOpened: '<orange>', tagClosed: '</orange>', className: 'orange', nameClass: '<orange class="small">',
};

export const apple: Elements = {
  name: 'apple', tag: '<apple></apple>', tagOpened: '<apple>', tagClosed: '</apple>', className: 'apple', nameClass: '<apple class="small">', id: '<apple id= "green">',
};

export const doily: Elements = {
  name: 'doily', tag: '<doily></doily>', tagOpened: '<doily>', tagClosed: '</doily>', className: 'doily', nameClass: '<doily class="small">',
};

export const carrot: Elements = {
  name: 'carrot', tag: '<carrot></carrot>', tagOpened: '<carrot>', tagClosed: '</carrot>', className: 'carrot', nameClass: '<carrot class="small">',
};

export const arrTabEl = [{
  level: '1',
  title: 'Select the oranges',
  help: 'orange',
  elem: [{
    name: orange.name, col: 'One', checked: true, nesting: 0, child: 0, class: 0, id: 0, obj: orange,
  },
  {
    name: orange.name, col: 'Two', checked: true, nesting: 0, child: 0, class: 0, id: 0, obj: orange,
  }],
},
{
  level: '2',
  title: 'Select the orange',
  help: 'apple',
  elem: [{
    name: plate.name, col: 'One', checked: false, nesting: 0, class: 0, child: [apple], id: 0, obj: plate,
  },
  {
    name: apple.name, col: 'One', checked: true, nesting: `${plate.name}One`, child: 0, class: 0, id: 0, obj: apple,
  }],
},
{
  level: '3',
  title: 'Select the carrot',
  help: 'carrot',
  elem: [{
    name: plate.name, col: 'One', checked: false, nesting: 0, child: [carrot], class: 0, id: 0, obj: plate,
  },
  {
    name: carrot.name, col: 'One', checked: true, nesting: `${plate.name}One`, child: 0, class: 0, id: 0, obj: carrot,
  },
  {
    name: carrot.name, col: 'Two', checked: true, nesting: 0, child: 0, class: 0, id: 0, obj: carrot,
  }],
},
{
  level: '4',
  title: 'Select the small orange',
  help: '.small',
  elem: [{
    name: doily.name, col: 'One', checked: false, nesting: 0, child: [orange], class: 0, id: 0, obj: doily,
  },
  {
    name: orange.name, col: 'One', checked: true, nesting: `${doily.name}One`, child: 0, class: 'small', id: 0, obj: orange,
  },
  {
    name: orange.name, col: 'Two', checked: false, nesting: 0, child: 0, class: 0, id: 0, obj: orange,
  }],
},
{
  level: '5',
  title: 'Select all the things on the plates',
  help: 'plate *',
  elem: [{
    name: plate.name, col: 'One', checked: false, nesting: 0, child: [apple], class: 0, id: 0, obj: plate,
  },
  {
    name: apple.name, col: 'One', checked: true, nesting: `${plate.name}One`, child: 0, class: 0, id: 'green', obj: apple,
  },
  {
    name: plate.name, col: 'Two', checked: false, nesting: 0, child: [carrot], class: 0, id: 0, obj: plate,
  },
  {
    name: carrot.name, col: 'Two', checked: true, nesting: `${plate.name}Two`, child: 0, class: 0, id: 0, obj: carrot,
  }],
},
{
  level: '6',
  title: 'Select the orange on the colored plate',
  help: '#colored carrot',
  elem: [{
    name: plate.name, col: 'One', checked: false, nesting: 0, child: [orange], class: 0, id: 0, obj: plate,
  },
  {
    name: orange.name, col: 'One', checked: false, nesting: `${plate.name}One`, child: 0, class: 0, id: 0, obj: orange,
  },
  {
    name: plate.name, col: 'Two', checked: false, nesting: 0, child: [orange], class: 0, id: 'colored', obj: plate,
  },
  {
    name: orange.name, col: 'Two', checked: true, nesting: `${plate.name}Two`, child: 0, class: 0, id: 0, obj: orange,
  }],
},
{
  level: '7',
  title: 'Select all the small oranges',
  help: 'orange',
  elem: [{
    name: doily.name, col: 'One', checked: false, nesting: 0, child: [orange], class: 0, id: 0, obj: doily,
  },
  {
    name: orange.name, col: 'One', checked: true, nesting: `${doily.name}One`, child: 0, class: 'small', id: 0, obj: orange,
  },
  {
    name: plate.name, col: 'One', checked: false, nesting: 0, child: [apple], class: 0, id: 0, obj: plate,
  },
  {
    name: apple.name, col: 'One', checked: false, nesting: `${plate.name}One`, child: 0, class: 'small', id: 0, obj: apple,
  },
  {
    name: orange.name, col: 'Two', checked: true, nesting: 0, child: 0, class: 'small', id: 0, obj: orange,
  }],
},
{
  level: '8',
  title: 'Select the carrot at the orange',
  help: 'carrot, orange',
  elem: [{
    name: doily.name, col: 'One', checked: false, nesting: 0, child: [carrot], class: 0, id: 0, obj: doily,
  },
  {
    name: carrot.name, col: 'One', checked: true, nesting: `${doily.name}One`, child: 0, class: 0, id: 0, obj: carrot,
  },
  {
    name: plate.name, col: 'One', checked: false, nesting: 0, child: [orange], class: 0, id: 0, obj: plate,
  },
  {
    name: orange.name, col: 'One', checked: true, nesting: `${plate.name}One`, child: 0, class: 0, id: 0, obj: orange,
  }],
},
{
  level: '9',
  title: 'Select all the carrots',
  help: 'plate carrot',
  elem: [{
    name: doily.name, col: 'One', checked: false, nesting: 0, child: 0, class: 0, id: 0, obj: doily,
  },
  {
    name: plate.name, col: 'One', checked: false, nesting: 0, child: [carrot, orange], class: 0, id: 0, obj: plate,
  },
  {
    name: carrot.name, col: 'One', checked: true, nesting: `${plate.name}One`, child: 0, class: 0, id: 0, obj: carrot,
  },
  {
    name: orange.name, col: 'One', checked: false, nesting: `${plate.name}One`, child: 0, class: 0, id: 0, obj: orange,
  },
  {
    name: doily.name, col: 'Two', checked: false, nesting: 0, child: [carrot], class: 0, id: 0, obj: doily,
  },
  {
    name: carrot.name, col: 'Two', checked: false, nesting: `${doily.name}Two`, child: 0, class: 0, id: 0, obj: carrot,
  }],
},
{
  level: '10',
  title: 'Select all the elements',
  help: 'div *',
  elem: [{
    name: doily.name, col: 'One', checked: true, nesting: 0, child: 0, class: 0, id: 0, obj: doily,
  },
  {
    name: plate.name, col: 'One', checked: true, nesting: 0, child: [apple], class: 0, id: 0, obj: plate,
  },
  {
    name: carrot.name, col: 'One', checked: true, nesting: 0, child: 0, class: 0, id: 0, obj: carrot,
  },
  {
    name: apple.name, col: 'One', checked: false, nesting: `${plate.name}One`, child: 0, class: 0, id: 0, obj: apple,
  }],
}];
