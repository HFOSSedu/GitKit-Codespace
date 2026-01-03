# Working with Images

## Draw.io

Images are created and edited using [draw.io](https://www.drawio.com/).

## Structure

The source (Draw.io) images are stored as `.svg` images in the subdirectories of `GitKit-Codesapce/materials/images`.  
- There is a subdirectory for each chapter in `materials/images`.
- Each chapter's subdirectory contains a `text` and a "`slides`" subdirectory.
  - The images that appear in the text are contained in the "`text`" subdirectory.
  - The images that appear in the slides are contained in the "`slides`" subdirectory.
  - Images that appear in both are stored in both locations.

## The `BaseDiagram`

The `materials/images` subdirectory contains the `BaseDiagram.svg` file.
  - This file contains an image with all or nearly all of the elements necessary to produce all fo the Git/GitHub diagrams.
    - Additional diagrams are typically created by removing, editing, adapting elements of this diagram.
  - This diagram is sized to match the size of the current images in the slides and text.
    - The size is enforced by small invisible sqaure elements in each corner of the diagram.
    - This enusres that when the images are exported they retain the proper size.
    - It may be necessary to adapt this size by moving the invisible squares for some diagrams that are smaller or larger.
      - Click in a corner and choose "Unlock" to be able to move the invisible square.

## Creating or Updating an Image

1. Log into GitHub with a user that has R/W permission to HFOSSedu.
2. Visit `HFOSSEdu/GitKit-Codespace` or your fork of it on GitHub.
3. Synchronize the `main` branch with the upstream if necessary.
4. Browse the repository to identify the name and location of the image that you wish to start from:
   - If creating a new image you will use the `GitKit-Codespace/materials/BaseDiagram.svg`](https://github.com/HFOSSedu/GitKit-Codespace/blob/draw.io-images/materials/images/BaseDiagram.svg) or the [`GitKit-Codespace/materials/BlankDiagram.svg`](https://github.com/HFOSSedu/GitKit-Codespace/blob/draw.io-images/materials/images/BlankDiagram.svg)
   - If updating an existing image find its source in one of the sub-directories of [`GitKit-Codespace/materials/images`](https://github.com/HFOSSedu/GitKit-Codespace/blob/draw.io-images/materials/images/).
5. Create a new feature branch from `main` for the image you are creating/updating.
6. Open the [Draw.io application](https://app.diagrams.net/).
7. Open the image you identified to start from:
   - "File" -> "Open from" -> "GitHub".
   - Choose the `HFOSSedu/GitKit-Codespace` or your fork of it.
   - Select the feature branch that you created.
   - Navigate to the image within `GitKit-Codesace/materials/images`.
   - Choose the `.svg` for the image to identified.    
8. If you are making a new image or replacing an existing image:
   a. Make a copy of the image:
      - "File" -> "Make a Copy..."
   b. Rename the copy of the image:
      - "File" -> "Rename..."
        - If you are replacing an existing `.png` image:
          - Find the existing image in the subdirectories of the [`GitKit-Codespace/source/`](https://github.com/HFOSSedu/GitKit-Codespace/tree/main/source) directory.
          - Rename the new image to match the filename of the image being replaced but using the extension `.svg` instead of `.png`.
    c. Save the renamed image:
       - "File" -> "Save as..."
       - Verify the filename in the "Save as" box.
       - Click the "Where" drop down and select "GitHub pick a folder"
         - It may be necessary to "Authorize" Draw.io to commit to the GitHub repo as your user the first time you use it.
       - Choose the feature branch you created for the new image.
       - Choose the appropriate subdirectory of `GitKitCodespace/mateirals/images/<chapter>/`.
       - Click "Save".
9. Edit the image and save as necessary.

Note: When working on an image and saving on-going changes, Draw.io often reports an "Error saving file" due to a "Timeout".  Saving again will often resolve the issue but you will be propted to "Merge" or "Overwrite" the existing file. Choose the "Overwrite" option to commit the current version of the file.

## Updating an Image in the Text

Images that appear in the text are linked from their location in `GitKit-Codespaces/materials/images` to the appropriate location in `GitKit-Codespaces/source` that is referenced by the text source.

1. Open a codespace on [GitKit-Codespaces](https://github.com/HFOSSedu/GitKit-Codespace/tree/main) or your fork of it where you have your feature branch.
2. Ensure that you are on your feature branch.
3. In a terminal, check for an existing link to the image's `.svg` file in the `materials/images` directory in the appropraite `source/` subdirectory.
   - If no such link exists, create one:
     ```
     cd ~/GitKit-Codespace
     ln --symbolic --force \
     "materials/images/text/<chapter>/text/<file>.svg" \
     "source/<chapter>/images/<file>.svg"
     ```
4. Open the PreTeXT source file that references the image from the `source/<chapter>` directory.
5. Change the reference to the image to point to the linked `.svg` file instead of to the `.png` file.
6. Update any captions, text or exercises that refernce the diagram as necessary.
7. Rebuild text and verify that the image and any new captions/text/exercises appear correctly.
   - If a `.png` image was replaced by a `.svg` image delete the `.png` image file from the `source/<chapter>/images` directory.
8. Stage and commit the changes.
9. Create a pull request to the upstream [GitKit-Codespace](https://github.com/HFOSSedu/GitKit-Codespace) repository.
   - If you are working on a specific issue in the issue tracker, check its description to see if the PR should be made to the `main` branch or to a feature branch that is being used to collect a number of related changes before being merged into main.

## Updating an Image in the Slides

1. _download the image, paste into slide, save slides, stage & commit, PR for .pptx file._

