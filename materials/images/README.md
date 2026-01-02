# Working with Images

## Draw.io

Images are created and edited using [draw.io](https://www.drawio.com/).

## Structure

The source (draw.io) images are stored in subdirectorys of "`materials/images`".  
- There is a subdirectory for each chapter in "`materials/images`".
- Each chapter's subdirectory contains a "`text`" and a "`slides`" subdirectory.
  - The images that appear in the text are contained in the "`text`" subdirectory.
  - The images that appear in the slides are contained in the "`slides`" subdirectory.
  - Images that appear in both are stored in both locations.

## The `BaseDiagram`

The "`materails/images` subdirectory contains the `BaseDiagram.svg` file.
  - This file contains an image with all or nearly all of the elements necessary to produce all fo the Git/GitHub diagrams.
    - Additional diagrams are created by removing, editing, adapting elements of this diagram.
  - This diagram is sized to match the size of the current images in the slides and text.
    - The size is set by placing a small invisible sqaure element in each corner of the diagram.
    - This enusres that when the images are exported they retain the proper size.
    - It may be necessary to adapt this size for some diagrams that are smaller or larger.

## Creating or Updating an Image

1. Log into GitHub with a user that has R/W permission to HFOSSedu.
2. Create a new feature branch in HFOSSEdu/GitKit-Codespace on GitHub.
3. Open the [Draw.io application](https://app.diagrams.net/).
4. "File" -> "Open from" -> "GitHub".
5. Choose "HFOSSedu/GitKit-Codespace".
6. Select your feature branch.
7. Navigate to "materials/images" or an appropriate subdirectory.
8. Choose the "BaseDiagram.svg" file or the other "svg" files for another image from which to start.
9. "File" -> "Make a Copy..."
10. "File" -> "Rename..."
    - Rename the image to match the filename of the image being replaced or a new name if the image is being added.
    - Use the `.svg` extension for all files.
    - Existing image names can be found in the "source/<chapter>/images" directory.
11. "File" -> "Save as..."
12. Check the filename in the "Save as" box.
13. Click the "Where" drop down and select "GitHub pick a folder" 
    - Choose the appropriate "images/<chapter>/" subdirectory.
14. Click "Save"

Note: When working on an image and saving on-going changes, draw.io often reports an "Error saving file" due to a "Timeout".  Saving again will resolve the issue but you will be propted to "Merge" or "Overwrite" the existing file.  The "Overwrite" option will commit the current version of the file.

## Updating an Image in the Text

1. _copy the image to the appropraite `source/<chapter>/images` subdirectory or the `source/shared-images` directory._
2. _stage and commit_
_(Can possibly script this? Run a script any time an image changes and it moves them)._

## Updating an Image in the Slides

1. _download the image, paste into slide, save slides, stage & commit, PR for .pptx file._

