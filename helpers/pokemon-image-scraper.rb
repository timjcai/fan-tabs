require 'nokogiri'
require 'csv'
require 'open-uri'
require 'watir'

filepath = "helpers/pokemonnames151.csv"

def create_151(filepath)
  all_151_names = []

  CSV.foreach(filepath) do |row|
    all_151_names << ["#{row.join.downcase!}"]
  end

  return all_151_names
end

def url(name)
  "https://www.smogon.com/dex/rs/pokemon/#{name}/"
end

def scrape_img(url)
  browser = Watir::Browser.new

  browser.goto "#{url}"
  # html_file = URI.open(url).read
  html_doc = Nokogiri::HTML.parse(browser.html)
  html_doc.search(".PokemonAltInfo-sprite").each do |element|
    # p element.inner_html
    return element.css("img").attribute("src").value
  end
  browser.close
end

def create_csv_row(name)
  set = []
  set << name.join
  set << "https://www.smogon.com/dex/media/sprites/rs/#{name.join}.png"
  return set
end

def name_and_image_array(array)
  name_and_image_array = []
  array.each do |pokemon|
    p name_and_image_array << create_csv_row(pokemon)
  end
  return name_and_image_array
end

# all_151.map do |pokemon|
#   all_151 << create_csv_row(pokemon)
# end

# p all_151

name_and_image_array(create_151(filepath)).each do |row|
  CSV.open(filepath, "ab") do |csv|
    csv << row
  end
end

# def load_csv
  # CSV.open(filepath, "wb") do |csv|
  # end
# end
