# Working with Images

## Draw.io

Images are created and edited using [draw.io](https://www.drawio.com/).

## Structure

The source (draw.io) images are stored in subdirectorys of "materials/images".  
- There is a subdirectory for each chapter in "materials/images".
- Each chapter's subdirectory contains a "text" and a "slides" subdirectory.
  - The images that appear in the text are contained in the "text" subdirectory.
  - The images that appear in the slides are contained in the "slides" subdirectory.
  - Images that appear in both are stored in both locations.

## Creating or Updating an Image

1. Log into GitHub with a user that has R/W permission to HFOSSedu.
2. Create a new feature branch in HFOSSEdu/GitKit-Codespace on GitHub.
3. Open the [Draw.io application](https://app.diagrams.net/).
4. "File" -> "Open from" -> "GitHub".
5. Choose "HFOSSedu/GitKit-Codespace".
6. Select your feature branch.
7. Navigate to "materials/images".
8. Choose the "BlankDiagram.drawio" file or the "drawio" file for another image from which to start.
9. "File" -> "Make a Copy..."
10. "File" -> "Rename..."
    - Rename the image to match the filename of the image being replaced or a new name if the image is being added.
    - Existing image names can be found in the "source/<chapter>/images" directory.
11. "File" -> "Save as..."
12. Check the filename in the "Save as" box.
13. Click the "Where" drop down and select "GitHub pick a folder" 
    - Choose the appropriate "images/<chapter>/" subdirectory.
14. Click "Save"

## Updating an Image in the Text

1. Open the image to be updated in [Draw.io application](https://app.diagrams.net/).
2. "File" -> "Export as..." -> "PNG..."
3. Check "Transparent Background".
4. Uncheck "Include a copy of my diagram".
5. Click "Export..."
6. Check the that the filename in "Save as:" is correct.
7. Click the "Where" drop down and select "GitHub pick a folder" 
    - Choose the "source/<chapter>/images" direcotry for the image.
8. Click "Save".

## Updating an Image in the Slides

