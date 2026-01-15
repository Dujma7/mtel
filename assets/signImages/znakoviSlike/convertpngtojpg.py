import os

# Function to rename all PNG files to JPG
def rename_png_to_jpg(directory):
    # Get all files in the directory
    for filename in os.listdir(directory):
        # Check if the file has a .png extension
        if filename.endswith(".png"):
            # Get the full file path
            old_file_path = os.path.join(directory, filename)
            
            # Create new file name by changing the extension to .jpg
            new_filename = filename.replace(".png", ".jpg")
            new_file_path = os.path.join(directory, new_filename)
            
            # Rename the file
            os.rename(old_file_path, new_file_path)
            print(f'Renamed: {old_file_path} -> {new_file_path}')

# Specify the directory where the files are located
directory = "./"# Change this to your directory path

# Call the function
rename_png_to_jpg(directory)
