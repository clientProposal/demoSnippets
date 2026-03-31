const instance = WebViewer.getInstance();

const { annotationManager, Annotations } = instance.Core;

const { WidgetFlags } = Annotations;

const flags = new WidgetFlags();

const field = new Annotations.Forms.Field('some signature field name', { 

      type: 'Sig', 

      flags,

    });





    const widgetAnnot = new Annotations.SignatureWidgetAnnotation(field, {

      appearance: '_DEFAULT',

      appearances: {

        _DEFAULT: {

          Normal: {

            offset: {

              x: 100,

              y: 100,

            },

          },

        },

      },

    });

    widgetAnnot.PageNumber = 1;

    widgetAnnot.X = 100;

    widgetAnnot.Y = 100;

    widgetAnnot.Width = 200;

    widgetAnnot.Height = 100;

    widgetAnnot.backgroundColor = new Annotations.Color(255, 255, 0); 

    widgetAnnot.StrokeColor = new Annotations.Color(255, 0, 0);

    widgetAnnot.StrokeThickness = 3;

    await annotationManager.getFieldManager().addField(field);

    await annotationManager.addAnnotation(widgetAnnot);

    await annotationManager.drawAnnotationsFromList([widgetAnnot]);
