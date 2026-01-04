# Working with Images

## Draw.io

Images are SVG created and edited using [draw.io](https://www.drawio.com/).

## Structure

The `materials/` directory contains:
- `slides`: Directory containing the PowerPoint slide decks for each unit in the GitKit.
- `images/<chapter>`: A directory for each chapter of the text containing the images that appear in the slides for that chapter.
- `BaseDiagram.svg`: An image with all or nearly all of the elements necessary to produce all fo the Git/GitHub diagrams.
- `BlankDiagram.svg`: A blank image that is the same size as the `BaseDiagram.svg`.

The `source/<chapter>/images` directories contain the images that appear in the corresponding `<chapter>` of the text.

## The `BaseDiagram.svg` Image

The `BaseDiagram.svg` file contains an image with all or nearly all of the elements necessary to produce all fo the Git/GitHub diagrams.
  - Additional diagrams are typically created by removing, editing, adapting elements of this diagram.
  - This diagram is sized to match the size of the current images in the slides and text.
    - The size is enforced by small invisible sqaure elements in each corner of the diagram.
    - This enusres that when the images are exported they retain the proper size.
    - It may be necessary to adapt this size by moving the invisible squares for some diagrams that are smaller or larger.
      - Click in a corner and choose "Unlock" to be able to move the invisible square.

## Creating or Updating an Image

1. Log into GitHub with a user that has R/W permission to HFOSSedu.
2. Visit `HFOSSEdu/GitKit-Codespace` or your fork of it on GitHub.
3. Synchronize the `main` branch or the feature branch to which you are contributing with the upstream.
4. Browse the repository to identify the name and location of the image that you wish to start from:
   - If creating a new image you might start from:
     - The [`materials/BaseDiagram.svg`](./BaseDiagram.svg) or the [materials/BlankDiagram.svg`](./BlankDiagram.svg).
     - An existing image in the text from the `<chapter>/images` sub-directories of [`source`](../source).
     - An existing image in the slides from the `<chapter>` sub-directories of [`materials/images`](./images).
   - If updating an existing image find its source:
     - For images in the text look in the `<chapter>/images` sub-directories of [`source`](../source).
     - For images in the slides look in the `<chapter>` sub-directories of [`materials/images`](./images).
5. Create a new feature branch from `main` or the feature branch to which you are contributing for your work.
6. Open the [Draw.io application](https://app.diagrams.net/).
7. Open the image you identified to start from:
   - "File" -> "Open from" -> "GitHub".
   - Choose the `HFOSSedu/GitKit-Codespace` or your fork of it.
   - Select the feature branch that you created.
   - Navigate to the image.
   - Choose the `.svg` for the image that you identified.    
8. If you are making a new image or replacing an existing image:
   a. Make a copy of the image:
      - "File" -> "Make a Copy..."
   b. Rename the copy of the image:
      - "File" -> "Rename..."
        - If you are replacing an existing `.png` image rename the new image to match the filename of the image being replaced but using the extension `.svg` instead of `.png`.
    c. Save the renamed image:
       - "File" -> "Save as..."
       - Verify the filename in the "Save as" box.
       - Click the "Where" drop down and select "GitHub pick a folder"
         - It may be necessary to "Authorize" Draw.io to commit to the GitHub repo as your user the first time you use it.
       - Choose the feature branch you created for the new image.
       - Choose the appropriate location for the new image:
         - For images in the text save them in the approrpriate `<chapter>/images` sub-directory of `source`.
         - For images in the slides save them in the appropraite `<chapter>` sub-directory of `materials/images`.
       - Click "Save".
9. Edit the image and save as necessary.

Note: When working on an image and saving on-going changes, Draw.io often reports an "Error saving file" due to a "Timeout".  Saving again will often resolve the issue but you will be propted to "Merge" or "Overwrite" the existing file. Choose the "Overwrite" option to commit the current version of the file.

## Updating an Image in the Text

1. Open a codespace on `GitKit-Codespaces` from the repository where you have your feature branch.
2. Ensure that you are on your feature branch.
3. Open the PreTeXT source file that references the image from the `source/<chapter>` directory.
4. Change the reference to the image to point to the linked `.svg` file instead of to the `.png` file.
5. Update any captions, text or exercises that reference the diagram as necessary.
6. Rebuild text and verify that the image and any new captions/text/exercises appear correctly.
   - If a `.png` image was replaced by a `.svg` image delete the `.png` image file from the `source/<chapter>/images` directory.
7. Stage and commit the changes.
8. Create a pull request to the upstream repository.
   - If you are working on a specific issue in the issue tracker, check its description to see if the PR should be made to the main branch or to a feature branch that is being used to collect a number of related changes before being merged into main.

## Updating an Image in the Slides

1. Clone the `GitKit-Codespace` repo containing your feature branch to your local machine.
2. Ensure that you are on your feature branch.
3. Open the slide deck to be updated.
4. Replace the image in the slides with the SVG image.
5. Save the slide deck.
6. Stage and commit the changes.
7. Create a pull request to the upstream repository.
   - If you are working on a specific issue in the issue tracker, check its description to see if the PR should be made to the main branch or to a feature branch that is being used to collect a number of related changes before being merged into main.
