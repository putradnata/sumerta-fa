<template>
    <Header/>
    <div class="container w-full mx-auto pt-20">
        <div class="w-full p-3 mb-12 md:mt-12" >
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="nama">
                        Nama
                    </label>
                    <input name="nama" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nama" type="text" placeholder="Nama Banjar">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="alamat">
                        Alamat
                    </label>
                    <input name="alamat" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="alamat" type="text" placeholder="Alamat Banjar">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="keterangan">
                        Keterangan
                    </label>
                    <textarea name="keterangan" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nama" type="text" placeholder="Keterangan"></textarea>
                </div>
                
                <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Simpan
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Header from '@/components/templates/header.vue';
// import axios from 'axios';

export default {
    name: "Form",
    components: {
        Header,
    },
}
</script>