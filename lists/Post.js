const {
    Slug,
    Text,
    CalendarDay,
    Checkbox,
    Integer,
    Color,
    Select,
    CloudinaryImage,
} = require("@keystonejs/fields");
const { atTracking } = require('@keystonejs/list-plugins');

const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");
const { CloudinaryAdapter } = require("@keystonejs/file-adapters");
require("dotenv").config();
const fullFeatured = {
    plugins:
        "print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",
    imagetools_cors_hosts: ["picsum.photos"],
    menubar: "file edit view insert format tools table help",
    toolbar:
        "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl",
    toolbar_sticky: true,
    autosave_ask_before_unload: true,
    autosave_interval: "30s",
    autosave_prefix: "{path}{query}-{id}-",
    autosave_restore_when_empty: false,
    autosave_retention: "2m",
    image_advtab: true,
    content_css: "//www.tiny.cloud/css/codepen.min.css",
    link_list: [
        { title: "My page 1", value: "http://www.tinymce.com" },
        { title: "My page 2", value: "http://www.moxiecode.com" },
    ],
    image_list: [
        { title: "My page 1", value: "http://www.tinymce.com" },
        { title: "My page 2", value: "http://www.moxiecode.com" },
    ],
    image_class_list: [
        { title: "None", value: "" },
        { title: "Some class", value: "class-name" },
    ],
    importcss_append: true,
    file_picker_callback: function (callback, value, meta) {
        /* Provide file and text for the link dialog */
        if (meta.filetype === "file") {
            callback("https://www.google.com/logos/google.jpg", {
                text: "My text",
            });
        }

        /* Provide image and alt text for the image dialog */
        if (meta.filetype === "image") {
            callback("https://www.google.com/logos/google.jpg", {
                alt: "My alt text",
            });
        }

        /* Provide alternative source and posted for the media dialog */
        if (meta.filetype === "media") {
            callback("movie.mp4", {
                source2: "alt.ogg",
                poster: "https://www.google.com/logos/google.jpg",
            });
        }
    },
    templates: [
        {
            title: "New Table",
            description: "creates a new table",
            content:
                '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>',
        },
        {
            title: "Starting my story",
            description: "A cure for writers block",
            content: "Once upon a time...",
        },
        {
            title: "New list with dates",
            description: "New List with dates",
            content:
                '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>',
        },
    ],
    template_cdate_format: "[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]",
    template_mdate_format: "[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]",
    height: 600,
    image_caption: true,
    quickbars_selection_toolbar:
        "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
    noneditable_noneditable_class: "mceNonEditable",
    toolbar_mode: "sliding",
    contextmenu: "link image imagetools table",
};

// const editorConfig = {
//     height: 700,
//     plugins: [
//         "fullpage advlist autolink lists link image charmap print preview anchor",
//         "searchreplace visualblocks code fullscreen",
//         "insertdatetime media table paste code help wordcount",
//     ],
//     toolbar:
//         "undo redo | formatselect | " +
//         "preview |" +
//         " fontselect bold italic fontsizeselect forecolor backcolor | alignleft aligncenter " +
//         " alignright alignjustify | bullist numlist outdent indent |" +
//         " removeformat | help",
//     content_css: [
//         "//fonts.googleapis.com/css?family=Lato:300,300i,400,400i",
//         "//www.tiny.cloud/css/codepen.min.css",
//     ],
// };
// const editorConfig1 = {
//     menu: {
//         file: {
//             title: "File",
//             items: "newdocument restoredraft | preview | print ",
//         },
//         edit: {
//             title: "Edit",
//             items: "undo redo | cut copy paste | selectall | searchreplace",
//         },
//         view: {
//             title: "View",
//             items:
//                 "code | visualaid visualchars visualblocks | spellchecker | preview fullscreen",
//         },
//         insert: {
//             title: "Insert",
//             items:
//                 "image link media template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor toc | insertdatetime",
//         },
//         format: {
//             title: "Format",
//             items:
//                 "bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align | forecolor backcolor | removeformat",
//         },
//         tools: {
//             title: "Tools",
//             items: "spellchecker spellcheckerlanguage | code wordcount",
//         },
//         table: {
//             title: "Table",
//             items: "inserttable | cell row column | tableprops deletetable",
//         },
//         help: { title: "Help", items: "help" },
//     },
// };

const adapter = new CloudinaryAdapter({
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_KEY,
    apiSecret: process.env.CLOUDINARY_SECRET,
    folder: "my-keystone-app",
});

module.exports = {
    fields: {
        contentType: {
            type: Select,
            options: "Poem, Writing",
        },
        title: {
            type: Text,
            isRequired: true,
        },
        preview: {
            type: Wysiwyg,
            editorConfig: fullFeatured,
        },
        description: {
            type: Wysiwyg,
            editorConfig: fullFeatured,
        },
        thumbnail: {
            type: CloudinaryImage,
            adapter,
        },
        mainImage: {
            type: CloudinaryImage,
            adapter,
        },
        backgroundColor: {
            type: Color,
            defaultValue: "rgba(245, 232, 215, 1)",
        },
        published: {
            type: Checkbox,
            defaultValue: false,
        },
        views: {
            type: Integer,
            defaultValue: ({ context, originalInput, actions }) => {
                return 0;
            },
            adminConfig: {
                isReadOnly: true,
            },
        },
        url: { type: Slug, isUnique: true },
    },
    plugins: [
        atTracking({
            format: "dd/mm/YYYY h:mm A",
            access: {
                read: true,
                create: true,
                update: true
            }

        })
    ],
    labelField: "title",
    adminConfig: {
        defaultColumns: "contentType, published, views",
    },
};
