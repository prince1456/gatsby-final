import { createRemarkButton } from 'gatsby-tinacms-remark'

/*
 ** Deprecated — gatsby-tinacms-remark: 0.4.0
 ** in favor of RemarkCreatorPlugin class
 */
const CreatePostPlugin = createRemarkButton({
  label: 'Create Post',
  filename: form => {
    return form.filename
  },
  fields: [
    //...
  ],
})

