import smartpy as sp


@sp.module
def main():
    class MusicRoyaltyMarketplace(sp.Contract):
        def __init__(self):
            self.data.songs = sp.big_map()
            self.data.counter = 0
    
        @sp.entry_point
        def addSong(self,params):

            sp.cast(params , sp.record(
                title = sp.string,
                artist = sp.string,
                artist_name = sp.string,
                image = sp.string,
                genre = sp.string,
                ipfs_hash = sp.string,
                price = sp.nat
            ))
            
            # sp.cast(artist , sp.string)
            # sp.cast(title, sp.string)
            # sp.cast(ipfs_hash , sp.string )
            # sp.cast(price , sp.int)
            
            # sp.cast(artist_name , sp.string)
            # sp.cast(genre , sp.string)
            # sp.cast(image , )
            
            
            self.data.songs[self.data.counter] = sp.record(
                title = params.title,
                artist = params.artist,
                ipfs_hash = params.ipfs_hash,
                price = sp.tez(params.price),  
                image = params.image,
                genre= params.genre,
                artist_name = params.artist_name,
                owner = [artist]
            )
            self.data.counter += 1
    
        # @sp.entry_point
        # def buySong(self, song_id):
        #     song = self.data.songs[song_id]
        #     assert sp.amount >= song.price
        #     sp.send(song.owner, song.price)
        #     self.data.songs[song_id].owner = sp.sender

@sp.add_test()
def test():
    scenario = sp.test_scenario("Test" , main)
    contract = main.MusicRoyaltyMarketplace()
    scenario += contract


    params = sp.record(artist = "sp.string", title = "sp.string" , ipfs_hash = "hash" , price = 1000000 )
    # Register a song
    contract.addSong(params)
    # contract.addSong("Song 2")

    # Buy a song
    # contract.buySong(0).run(sender=sp.address("tz2..."), amount=sp.mutez(1000000))
