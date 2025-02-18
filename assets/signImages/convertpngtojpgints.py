# Function to rename all .png matches to .jpg in a text file
def rename_png_to_jpg_in_text_file(file_path):
    try:
        # Read the contents of the text file
        with open(file_path, 'r') as file:
            content = file.read()

        # Replace all occurrences of .png with .jpg
        updated_content = content.replace(".png", ".jpg")

        # Write the updated content back to the text file
        with open(file_path, 'w') as file:
            file.write(updated_content)

        print(f"All '.png' matches have been renamed to '.jpg' in {file_path}")

    except FileNotFoundError:
        print(f"The file {file_path} does not exist.")
    except Exception as e:
        print(f"An error occurred: {e}")

# Specify the path to your text file
file_path = "./signsMeaningAndImage2.ts"  # Change this to the path of your text file

# Call the function
rename_png_to_jpg_in_text_file(file_path)

