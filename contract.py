import smartpy as sp


@sp.module
def main():
   
    class TEZ_TUNES(sp.Contract):
        def __init__(self):
            self.data.songs = sp.big_map()
            self.data.counter = sp.nat(0)

       
        @sp.entrypoint
        def register_song(self, params):
            sp.cast(params, sp.record(
                title=sp.string,
                artist=sp.address,
                ipfs_hash=sp.string,
                owners=sp.list[sp.address],
                price= sp.int
            ))
           

           
            self.data.songs[self.data.counter] = sp.record(
                title = params.title,
                artist= params.artist,
                ipfs_hash=params.ipfs_hash,
                owners=params.owners,
                # price need to be dynamic and user defined
                price=sp.tez(1)
            )
            self.data.counter += 1
           
        @sp.entrypoint
        def buySong(self, params):
            song = self.data.songs[params.song_id]
            # the payments will work in production not in development
            # sp.verify(sp.amount >= song.price, "Not enough XTZ")
            # sp.send(song.artist, song.price)
            self.data.songs[params.song_id].owners.push(params.address)

# Tests
@sp.add_test()
def test():
    # We define a test scenario, together with some outputs and checks
    # The scenario takes the module as a parameter
    scenario = sp.test_scenario("Welcome", main)
    scenario.h1("Welcome")
   
    # We first define a contract and add it to the scenario
    contract = main.TEZ_TUNES()
    scenario += contract
    test_admin = sp.test_account("test")
   
    contract.register_song(sp.record(title = "fdsaf" , artist=test_admin.address , ipfs_hash="fgdga" , price = 1 , owners=[test_admin.address]))
    # c1.register_song(sp.record(title = "fdsaf" , artist= "fdsafga" , ipfs_hash="fgdga" , price = 1 , owners=["fgsaghkjgs"]))


    contract.buySong(sp.record(song_id = 0, address= test_admin.address))