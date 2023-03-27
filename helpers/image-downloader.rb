require "down"
require "csv"
require "fileutils"


filepath = "../sketch/pokemon/allpokemonpiclinks.csv"


all_151_images = []

CSV.foreach(filepath) do |row|
  all_151_images << "#{row[1]}"
end

p all_151_images

def init_pokemon_downloader(array)
  counter = 1
  array.each do |pokemon|
    p tempfile = Down.download(pokemon)
    p FileUtils.mv(tempfile.path, "#{counter}.png")
    p FileUtils.mv("#{counter}.png", "/Users/tim/code/timjcai/fan-tabs/sketch/pokemon/#{counter}.png")
    counter += 1
  end
end

init_pokemon_downloader(all_151_images)
