define(function() {
  return (opt = {}) => {
    let tableStyleStr = '';
    let cellStyleStr = '';
    let editor = opt.editor;
    let tableStyle = opt.tableStyle || {};
    let cellStyle = opt.cellStyle || {};
    let bm = editor.BlockManager;
    for (let prop in tableStyle){
      tableStyleStr += `${prop}: ${tableStyle[prop]}; `;
    }
    for (let prop in cellStyle){
      cellStyleStr += `${prop}: ${cellStyle[prop]}; `;
    }
    bm.getAll().reset();
    // bm.add('button', {
    //   label: opt.buttonBlkLabel,
    //   category: 'Basic Content',
    //   content: '<a class="button">Button</a>',
    //   attributes: {class:'gjs-fonts gjs-f-button'}
    // });
    bm.add('text', {
      label: opt.textBlkLabel,
      category: 'Basic Content',
      attributes: {class:'gjs-fonts gjs-f-text'},
      content: {
       type: 'text',
       content: 'Insert your text here',
       style: { padding: '10px' },
       activeOnRender: 1
      },
    });
    bm.add('sect100', {
      label: opt.sect100BlkLabel,
      category: 'Structured Content',
      attributes: {class:'gjs-fonts gjs-f-b1'},
      content: `<table style="${tableStyleStr}">
        <tr>
          <td style="${cellStyleStr}"><p class="gjs-fonts gjs-f-text" style="padding:10px;">Insert text or other content here</p></td>
        </tr>
        </table>`,
    });
    bm.add('sect50', {
      label: opt.sect50BlkLabel,
      category: 'Structured Content',
      attributes: {class:'gjs-fonts gjs-f-b2'},
      content: `<table style="${tableStyleStr}">
        <tr>
          <td style="${cellStyleStr} width: 50%">
            <p class="gjs-fonts gjs-f-text" style="padding:10px;">Insert text or other content here</p>
          </td>
          <td style="${cellStyleStr} width: 50%">
            <p class="gjs-fonts gjs-f-text" style="padding:10px;">Insert text or other content here</p>
          </td>
        </tr>
        </table>`,
    });
    bm.add('sect30', {
      label: opt.sect30BlkLabel,
      category: 'Structured Content',
      attributes: {class:'gjs-fonts gjs-f-b3'},
      content: `<table style="${tableStyleStr}">
        <tr>
          <td style="${cellStyleStr} width: 33.3333%"><p class="gjs-fonts gjs-f-text" style="padding:10px;">Insert text or other content here</p></td>
          <td style="${cellStyleStr} width: 33.3333%"><p class="gjs-fonts gjs-f-text" style="padding:10px;">Insert text or other content here</p></td>
          <td style="${cellStyleStr} width: 33.3333%"><p class="gjs-fonts gjs-f-text" style="padding:10px;">Insert text or other content here</p></td>
        </tr>
        </table>`,
    });
    bm.add('sect37', {
      label: opt.sect37BlkLabel,
      category: 'Structured Content',
      attributes: {class:'gjs-fonts gjs-f-b37'},
      content: `<table style="${tableStyleStr}">
        <tr>
          <td style="${cellStyleStr} width:30%"><p class="gjs-fonts gjs-f-text" style="padding:10px;">Insert text or other content here</p></td>
          <td style="${cellStyleStr} width:70%"><p class="gjs-fonts gjs-f-text" style="padding:10px;">Insert text or other content here</p></td>
        </tr>
        </table>`,
    });
    bm.add('divider', {
      label: opt.dividerBlkLabel,
      category: 'Structured Content',
      content: `<table style="width: 100%; margin-top: 10px; margin-bottom: 10px;">
        <tr>
          <td class="divider"></td>
        </tr>
      </table>
      <style>
      .divider {
        background-color: rgba(0, 0, 0, 0.1);
        height: 1px;
      }
      </style>`,
      attributes: {class:'gjs-fonts gjs-f-divider'}
    });
    bm.add('text-sect', {
      label: opt.textSectionBlkLabel,
      category: 'Basic Content',
      content: '<h1 class="heading">Insert title here</h1><p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>',
      attributes: {class:'gjs-fonts gjs-f-h1p'}
    });
    bm.add('image', {
      label: opt.imageBlkLabel,
      category: 'Basic Content',
      attributes: {class:'gjs-fonts gjs-f-image'},
      content: {
        type:'image',
        style: {color:'black'},
        activeOnRender: 1
      },
    });
    bm.add('quote', {
      label: opt.quoteBlkLabel,
      category: 'Basic Content',
      content: '<blockquote class="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</blockquote>',
      attributes: {class:'fa fa-quote-right'}
    });
    bm.add('link', {
      label: opt.linkBlkLabel,
      category: 'Basic Content',
      attributes: {class:'fa fa-link'},
      content: {
        type: 'link',
        content: 'Link',
        style: {color:'#3b97e3'}
      },
    });
    bm.add('link-block', {
      label: opt.linkBlockBlkLabel,
      category: 'Basic Content',
      attributes: {class:'fa fa-link'},
      content: {
        type: 'link',
        editable: false,
        droppable: true,
        style: {
          display: 'inline-block',
          padding: '5px',
          'min-height': '50px',
          'min-width': '50px'
        }
      },
    });
    let gridItem =
      `<table class="grid-item-card">
        <tr>
          <td class="grid-item-card-cell">
            <img class="grid-item-image" src="http://placehold.it/250x150/78c5d6/fff/" alt="Image"/>
            <table class="grid-item-card-body">
              <tr>
                <td class="grid-item-card-content">
                  <h1 class="card-title">Title here</h1>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>`;
    bm.add('grid-items', {
      label: opt.gridItemsBlkLabel,
      category: 'Structured Content',
      content: `<table class="grid-item-row">
        <tr>
          <td class="grid-item-cell2-l">${gridItem}</td>
          <td class="grid-item-cell2-r">${gridItem}</td>
        </tr>
      </table>`,
      attributes: {class:'fa fa-th'}
    });
    let listItem =
      `<table class="list-item">
        <tr>
          <td class="list-item-cell">
            <table class="list-item-content">
              <tr class="list-item-row">
                <td class="list-cell-left">
                  <img class="list-item-image" src="http://placehold.it/150x150/78c5d6/fff/" alt="Image"/>
                </td>
                <td class="list-cell-right">
                  <h1 class="card-title">Title here</h1>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>`;
    bm.add('list-items', {
      label: opt.listItemsBlkLabel,
      category: 'Structured Content',
      content: listItem + listItem,
      attributes: {class:'fa fa-th-list'}
    });
  };
})
